"use strict";

var registerVehicleValidationSchema = {};
registerVehicleValidationSchema.isValidVehicleData = {
    "model": {
        notEmpty: true,
        matches: {
            options: ["^[a-zA-Z 0-9\-\,\@]*$"],
            errorMessage: "Invalid Vehicle model."
        },
        errorMessage: "Enter Vehicle model."
    },
    "year": {
        notEmpty: true,
        matches: {
            options: ["^[0-9]*$"],
            errorMessage: "Invalid Vehicle year."
        },
        isLength: {
            options: [{ min: 4 }],
            errorMessage: "Please enter a valid year."
        },
        isLength: {
            options: [{ min: 4 }],
            errorMessage: "Please enter a valid year."
        },
        errorMessage: "Enter Vehicle year."
    },
    "vin": {
        notEmpty: true,
        matches: {
            options: ["^[a-zA-Z 0-9\-\,\@]*$"],
            errorMessage: "Invalid Vehicle vin."
        },
        errorMessage: "Enter Vehicle vin."
    },
    "registration": {
        notEmpty: true,
        matches: {
            options: ["^[a-zA-Z 0-9\-]*$"],
            errorMessage: "Invalid Vehicle registration."
        },
        errorMessage: "Enter Vehicle registration."
    },
    "driver": {
        notEmpty: true,
        matches: {
            options: ["^[a-zA-Z 0-9]*$"],
            errorMessage: "Invalid Driver Id."
        },
        errorMessage: "Enter Driver Id."
    },
    "fName": {
        notEmpty: true,
        matches: {
            options: ["^[a-z A-Z]*$"],
            errorMessage: "Invalid First Name."
        },
        errorMessage: "Enter First Name."
    },
    "lName": {
        notEmpty: true,
        matches: {
            options: ["^[a-z A-Z]*$"],
            errorMessage: "Invalid Last Name."
        },
        errorMessage: "Enter Last Name."
    },
    "phone": {
        notEmpty: true,
        isNumeric: true,
        isMobilePhone: true,
        errorMessage: 'Invalid Contact No.'
    },
    "ownerIdType": {
        notEmpty: true,
        isAlpha: true,
        in: 'body',
        matches: {
            options: [/\b(?:voter|aadhar|DL|bank)\b/],
            errorMessage: "Invalid ID Type."
        },
        errorMessage: "Invalid ID Type."
    },
    "id": {
        notEmpty: true,
        matches: {
            options: ["^[a-zA-Z 0-9]*$"],
            errorMessage: "Invalid Owner Id."
        },
        errorMessage: "Enter Owner Id."
    },
    "house": {
        notEmpty: true,
        matches: {
            options: ["^[a-zA-Z 0-9\-\,\@]*$"],
            errorMessage: "Invalid House No."
        },
        errorMessage: "Enter House No."
    },
    "address": {
        notEmpty: true,
        matches: {
            options: ["^[a-zA-Z 0-9\-\,\@]*$"],
            errorMessage: "Invalid Address."
        },
        errorMessage: "Enter Address."
    },
    "state": {
        notEmpty: true,
        matches: {
            options: ["^[A-Z]*$"],
            errorMessage: "Invalid State."
        },
        errorMessage: "Enter State."
    },
    "pin": {
        notEmpty: true,
        isNumeric: true,
        isLength: {
            options: [{ min: 6 }],
            errorMessage: "Please enter a valid PIN."
        },
        isLength: {
            options: [{ min: 6 }],
            errorMessage: "Please enter a valid PIN."
        },
        errorMessage: 'Empty PIN.'
    },
}

registerVehicleValidationSchema.isValidCarrierData = {
    "seat": {
        notEmpty: true,
        isNumeric: true,
        errorMessage: 'Invalid seat information.'
    },
    "time": {
        notEmpty: true,
        matches: {
            options: ["^([0-9]{2,}[\:][0-9]{2,})*$"],
            errorMessage: "Invalid time Format."
        },
        errorMessage: "Invalid time information."
    },
    "stop": {
        notEmpty: true,
        matches: {
            options: ["^[a-zA-Z 0-9\,]*$"],
            errorMessage: "Invalid stoppage information."
        },
        errorMessage: "Invalid stopage information."
    },
}

registerVehicleValidationSchema.isValidCabType = {
    "cabType": {
        notEmpty: true,
        isAlpha: true,
        in: 'body',
        matches: {
            options: [/\b(?:L|XL|XXL)\b/],
            errorMessage: "Invalid Cab Type."
        },
        errorMessage: "Invalid Cab Type."
    }
}

module.exports = registerVehicleValidationSchema;