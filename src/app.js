const express = require("express");
const User = require("./models/user")

const app = express();

const { connectDb } = require("./config/db");

app.post("/signup", async (req, res) => {
    const user = new User({
        firstName: "Virat",
        lastName: "Kohli",
        email: "ViratKohli@gmail.com",
        password: "virat100"
    })
    try {
        await user.save()
        res.send("user added successfully");
    } catch(err) {
        res.status(400).send("Error saving the user : " + err);
    }
})

connectDb()
    .then(() => {
        app.listen(7777, () => {
            console.log("server is listening on port 1023");
        });
    })
    .catch((err) => {
        console.log("Error is occured");
    })

