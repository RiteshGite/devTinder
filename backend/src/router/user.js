const express = require("express");
const ConnectionRequest = require("../models/connectionRequest");
const { userAuth } = require("../middlewares/auth");
const User = require("../models/user");

const userRouter = express.Router();

userRouter.get("/user/requests/received", userAuth, async (req, res, next) => {
    try {
        const loggedInUserId = req.user?._id;

        const connectionRequests = await ConnectionRequest.find({
            toUserId: loggedInUserId,
            status: "interested"
        }).populate(
            "fromUserId",
            "firstName lastName gender age photoUrl about skills"
        );

        if (!connectionRequests.length) {
            return res.status(200).json({
                success: true,
                message: "No connection Requests"
            })
        }
        res.status(200).json({
            success: true,
            requests: connectionRequests
        })
    } catch (err) {
        next(err);
    }
});

userRouter.get("/user/connections", userAuth, async (req, res, next) => {
    try {
        const loggedInUserId = req.user?._id;

        const USER_SAFE_DATA = "firstName lastName gender age photoUrl about skills"

        const connections = await ConnectionRequest.find({
            $or: [
                { fromUserId: loggedInUserId },
                { toUserId: loggedInUserId },
            ],
            status: "accepted"
        })
            .populate("fromUserId", USER_SAFE_DATA)
            .populate("toUserId", USER_SAFE_DATA)

        if (!connections.length) {
            return res.status(200).json({
                message: "No connections"
            })
        }

        const data = connections.map(obj => {
            if (obj.fromUserId._id.toString() === loggedInUserId.toString()) {
                return obj.toUserId;
            }
            return obj.fromUserId;
        })

        res.status(200).json({
            success: true,
            totalConnections: connections.length,
            connections: data
        })
    } catch (err) {
        next(err);
    }
})
userRouter.get("/feed", userAuth, async (req, res, next) => {
    const USER_SAFE_FIELD =
        "firstName lastName gender age photoUrl about skills memberships";

    try {
        const page = parseInt(req.query?.page) || 1;
        let limit = parseInt(req.query?.limit) || 10;
        limit = limit > 50 ? 50 : limit;
        const skip = (page - 1) * limit;

        const loggedInUserId = req.user?._id;

        // 1️⃣ Find users to hide
        const connectionRequests = await ConnectionRequest.find({
            $or: [
                { fromUserId: loggedInUserId },
                { toUserId: loggedInUserId },
            ],
        }).select("fromUserId toUserId");

        const hideUsersFromFeed = connectionRequests.map((obj) => {
            if (obj.fromUserId.toString() === loggedInUserId.toString()) {
                return obj.toUserId;
            }
            return obj.fromUserId;
        });

        // 2️⃣ Aggregation with PRIORITY
        const feed = await User.aggregate([
            {
                $match: {
                    _id: {
                        $nin: hideUsersFromFeed,
                        $ne: loggedInUserId,
                    },
                },
            },

            // ⭐ ADD PRIORITY FIELD
            {
                $addFields: {
                    priority: {
                        $cond: [
                            { $eq: ["$memberships.Gold.active", true] },
                            2,
                            {
                                $cond: [
                                    { $eq: ["$memberships.Silver.active", true] },
                                    1,
                                    0,
                                ],
                            },
                        ],
                    },
                },
            },

            // ⭐ SORT BY PRIORITY (Gold > Silver > Normal)
            {
                $sort: { priority: -1 },
            },

            // Pagination
            { $skip: skip },
            { $limit: limit },

            // Safety: remove unwanted fields
            {
                $project: {
                    priority: 0, // hide internal field
                },
            },
        ]);

        if (!feed.length) {
            return res.status(200).json({
                success: true,
                message: "No Users Found",
                feed: [],
            });
        }

        res.status(200).json({
            success: true,
            feed,
        });
    } catch (err) {
        next(err);
    }
});


module.exports = userRouter;