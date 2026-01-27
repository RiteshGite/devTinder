const mongoose = require("mongoose");

const connectDb = async () => {
    const uri = process.env.MONGO_URI;
    console.log("uri = ", uri);
    try {
        await mongoose.connect(uri);
        console.log("Connected to DB");
    } catch (err) {
        console.error("DB connection failed:", err);
        process.exit(1);
    }
};

module.exports = { connectDb };
