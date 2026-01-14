const express = require("express");
const ConnectionRequest = require("../models/connectionRequest");
const { userAuth } = require("../middlewares/auth");

const userRouter = express.Router();

// get all the pending connection requests for the loggedInUser
userRouter.get("/user/requests/received", userAuth, async (req, res) => {
    const loggedInUserId = req.user?._id;

    const connectionRequests = await ConnectionRequest.find({
        toUserId: loggedInUserId,
        status: "interested"
    }).populate(
        "fromUserId", 
        "firstName lastName gender age photoUrl about skills"
    );

    if(!connectionRequests.length) {
        return res.status(400).json({
            success: false,
            message: "No connection Requests"
        })
    }
    res.status(200).json({
        success: true,
        requests: connectionRequests
    })
});

module.exports = userRouter;