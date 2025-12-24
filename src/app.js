const express = require("express");

const app = express();

// app.use("route", rH, [rH1, rH2, rH3], rH4, rH5)

app.get("/", 
    (req, res, next) => {
        console.log("I am first");
        next();
    },[
    (req, res, next) => {
        console.log("I am Second");
        next();
    },
    (req, res, next) => {
        console.log("I am Third");
        next();
    },
    (req, res, next) => {
        console.log("I am Fourth");
        next();
    }],
    (req, res, next) => {
        console.log("I am 5th");
        res.send("I am 5th");
    })

app.listen(1023, () => {
    console.log("server is listening");
})