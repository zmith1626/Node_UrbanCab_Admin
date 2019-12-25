"use strict";

var driverdataValidationSchema = {};
driverdataValidationSchema = {
    "fName": {
        notEmpty: true,
        matches: {
            options: ["^[a-zA-Z 0-9]*$"],
            errorMessage: "Invalid First Name."
        },
        errorMessage: "Enter First Name."
    },
    "lName": {
        notEmpty: true,
        matches: {
            options: ["^[a-zA-Z 0-9]*$"],
            errorMessage: "Invalid Last Name."
        },
        errorMessage: "Enter Last Name."
    },
    "License": {
        notEmpty: true,
        matches: {
            options: ["^[a-zA-Z 0-9\-]*$"],
            errorMessage: "Invalid License Characters."
        },
        errorMessage: "Enter License No."
    },
    "vehicle": {
        notEmpty: true,
        matches: {
            options: ["^[a-zA-Z 0-9\-]*$"],
            errorMessage: "Invalid Vehicle Number Characters."
        },
        errorMessage: "Enter vehicle No."
    },
    "email": {
        notEmpty: true,
        isEmail: true,
        errorMessage: "Invalid Email Address."
    },
    "phone": {
        notEmpty: true,
        isNumeric: true,
        isMobilePhone: true,
        errorMessage: 'Invalid Contact No.'
    },
    "password": {
        notEmpty: true,
        matches: {
            options: ["^[a-zA-Z 0-9\@\#\$\&\_]*$"],
            errorMessage: "Invalid Password Characters."
        },
        isLength: {
            options: [{ min: 10 }],
            errorMessage: " Password must be at least 10 characters."
        },
        errorMessage: "Invalid Password."
    }
}

module.exports = driverdataValidationSchema;