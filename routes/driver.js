"use strict";

const express = require('express'),
    admin = require('firebase-admin'),
    driverRoute = express.Router(),
    singleEntityValidation = require('../validation/singleEntityValidationSchema'),
    driverValidationSchema = require('../validation/driverdataValidationSchema');

const dB = admin.firestore();
const Drivers = dB.collection('Drivers');

driverRoute.post('/drivers', async function (req, res) {
    if (req.method !== 'POST') {
        return res.status(400).json({ message: "Bad Request" });
    }

    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    req.checkBody(driverValidationSchema);
    const errors = req.validationErrors();

    if (errors) {
        return res.status(200).json({ message: errors[0].msg });
    }

    var uID = req.headers.authorization.split(' ')[1];
    await dB.collection('Admin').doc(uID).get().then((doc) => {
        if (doc.exists) {
            admin.auth().createUser({
                email: req.body.email,
                password: req.body.password
            }).then((userRecord) => {
                let userData = {
                    firstName: String(req.body.fName),
                    lastName: String(req.body.lName),
                    license: String(req.body.License),
                    vehicle: String(req.body.vehicle),
                    email: String(req.body.email),
                    phone: String(req.body.phone),
                    photo: "",
                    rating: 0,
                    votes: 0
                }
                return Drivers.doc(userRecord.uid).set(userData).then(() => {
                    res.status(201).json({ message: `Driver Record Created Successfuly, use ${userRecord.uid} as driver ID while registering a new vehicle.`, status: "OK" });
                }).catch((err) => {
                    res.status(408).json({ message: "Request Time Out" });
                });
            }).catch((err) => {
                console.log(err);
                return res.status(408).json({ message: "Request Time Out" });
            });
        } else {
            return res.status(401).json({ message: "Unauthorized" });
        }
    }).catch((err) => {
        console.log(err);
        return res.status(401).json({ message: "Unauthorized" });
    });
});

driverRoute.post('/drivers/delete', async function (req, res) {
    if (req.method !== 'POST') {
        return res.status(400).json({ message: "Bad Request" });
    }

    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    req.checkBody(singleEntityValidation.isValidUid);
    const errors = req.validationErrors();

    if (errors) {
        return res.status(200).json({ message: errors[0].msg });
    }

    var uID = req.headers.authorization.split(' ')[1];

    await dB.collection('Admin').doc(uID).get().then((doc) => {
        if (doc.exists) {
            return admin.auth().updateUser(req.body.accountID, {
                disabled: true
            }).then(() => {
                res.status(201).json({ message: "User deleted Successfully", status: "OK" });
            }).catch((err) => {
                res.status(408).json({ message: "Request Time Out" });
            });
        } else {
            return res.status(401).json({ message: "Unauthorized" });
        }
    }).catch((err) => {
        console.log(err);
        return res.status(401).json({ message: "Unauthorized" });
    });
});

module.exports = driverRoute;
