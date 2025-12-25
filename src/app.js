const express = require("express");
const app = express();

app.use("/", (err,req, res, next) => {
    console.log("first");  // this only inwokes when error thrown or next(err)
    // so dont write it on top
})

app.get("/user", (req, res, next) => {
    console.log("second");
    try {
        throw new Error("nothing went wrong");
        res.send("no error");
    } catch(err) {
        res.send(err.message);
    }
})

app.get("/getAdminData", (req, res, next) => {
    try {
        const adminData = undefined;

        if (!adminData) {
            const err = new Error("Admin not found");
            err.statusCode = 404;
            throw err;
        }

        res.json(adminData);
    } catch (err) {
        next(err);
    }
});

app.get("/getUserData", async (req, res) => {
    throw new Error("this is handled by Error handler");
});

// ✅ Centralized Error Handler (ALWAYS LAST)
app.use((err, req, res, next) => {
    const status = err.statusCode || 500;
    res.status(status).json({
        status,
        message: err.message
    });
});

app.listen(1023, () => {
    console.log("server is listening");
});
