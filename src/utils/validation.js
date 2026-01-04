const validator = require("validator");

const validateSignUpData = (req) => {
    // logic for validation 
    const { firstName, lastName, emailId, password } = req;
    if (!firstName || !lastName || !emailId || !password) {
        throw new Error("Fields are empty");
    } else if(!validator.isStrongPassword(password)) {
        throw new Error("Password is weak");
    }
}

module.exports = {
    validateSignUpData
}