"use strict";

var singleEntityValidationSchema = {};
singleEntityValidationSchema.isValidUid = {
    "accountID": {
        notEmpty: true,
        matches: {
            options: ["^[a-zA-Z 0-9\-\,\@]*$"],
            errorMessage: "Invalid driver ID characters."
        },
        errorMessage: "Enter Driver ID."
    }
}

module.exports = singleEntityValidationSchema;