require('dotenv').config()

const express = require("express");
const cookieParser = require("cookie-parser");
const { connectDb } = require("./config/db");
const errorHandler = require("./middlewares/errorHandler");

const authRouter = require("./router/auth");
const profileRouter = require("./router/profile");
const requestRouter = require("./router/request");
const userRouter = require("./router/user");

const cors = require("cors");

const app = express();

const allowedOrigins = [
    "http://localhost:5173",
    "https://dev-tinder-neon-pi.vercel.app"
]

app.use(cors({
    origin: function (origin, callback) {
        // allow Postman / server-to-server
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }

        return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

app.use(errorHandler);

const PORT = process.env.PORT || "7777";

connectDb() 
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
        });
    })
    .catch((err) => { });
