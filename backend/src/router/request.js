const express = require("express");
const { userAuth } = require("../middlewares/auth");
const ConnectionRequest = require("../models/connectionRequest");
const User = require("../models/user");

const requestRouter = express.Router();

requestRouter.post(
    "/request/send/:status/:toUserId",
    userAuth,
    async (req, res, next) => {
        try {
            const { status, toUserId } = req.params;
            const fromUserId = req.user._id;
            
            if (fromUserId.toString() === toUserId) {
                return res.status(400).json({
                    success: false,
                    message: "You cannot send a request to yourself"
                });
            }

            const allowedStatus = ["interested", "ignored"];
            if (!allowedStatus.includes(status)) {
                return res.status(400).json({
                    success: false,
                    message: `Invalid status type: ${status}`
                });
            }

            const toUserExists = await User.findById(toUserId);
            if (!toUserExists) {
                return res.status(404).json({
                    success: false,
                    message: "Target user does not exist"
                });
            }

            const existingRequest = await ConnectionRequest.findOne({
                $or: [
                    { fromUserId, toUserId },
                    { fromUserId: toUserId, toUserId: fromUserId }
                ]
            });

            if (existingRequest) {
                return res.status(400).json({
                    success: false,
                    message: "Connection request already exists"
                });
            }

            const request = await ConnectionRequest.create({
                fromUserId,
                toUserId,
                status
            });

            const action = (status) =>
                status === "interested" 
                ? `${req.user?.firstName} interested in ${toUserExists.firstName}'s profile` 
                : `${req.user?.firstName} ignored ${toUserExists.firstName}'s profile`

            res.status(201).json({
                success: true,
                message: action(status),
                data: request
            });
        } catch (err) {
            next(err);
        }
    }
);

requestRouter.post(
    "/request/review/:status/:requestId", 
    userAuth, 
    async (req, res, next) => {
        const loggedInUserId = req.user?._id;
        const { status, requestId } = req.params;

        try {
            const allowedStatus = ["accepted", "rejected"];
            if(!allowedStatus.includes(status)) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid Status type : " + status
                });
            }
            const connectionRequest = await ConnectionRequest.findOne({
                _id: requestId,
                toUserId: loggedInUserId,
                status: "interested"
            })
            if(!connectionRequest) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid request"
                })
            }
            connectionRequest.status = status;
            await connectionRequest.save();

            res.status(200).json({
                success: true,
                message: `Connection request ${status}`,
                data: connectionRequest
            })
            
        } catch (err) {
            next(err);
        }
})

module.exports = requestRouter;