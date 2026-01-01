const mongoose = require("mongoose");

const connectDb = async () => {
    await mongoose.connect("mongodb+srv://ritesh:ritesh123@namastedev.w0k3fkh.mongodb.net/devTinder");
    console.log("connected to the database 'devTinder'");
}

module.exports = {
    connectDb
}
