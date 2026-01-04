const errorHandler = (err, req, res, next) => {
    // For developers
    console.log(err);

    // Mongoose Validation Errors
    if(err.name === "ValidationError") {
        const messages = Object.values(err.errors).map(e => e.message);
        return res.status(400).json({
            success: false,
            errors: messages
        })
    }

    // Custom errors
    res.status(400).json({
        success: false,
        errors: err.message || "Something went wrong"
    })
}

module.exports = {
    errorHandler
}