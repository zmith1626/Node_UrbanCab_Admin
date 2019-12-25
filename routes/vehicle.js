"use strict";

const express = require('express'),
    admin = require('firebase-admin'),
    vehicleRoute = express.Router(),
    vehicleValidationSchema = require('../validation/registerVehicleValidationSchema');

const dB = admin.firestore();
const GeoPoint = admin.firestore.GeoPoint;
const Vehicle = dB.collection('Vehicles');

vehicleRoute.post('/vehicles', async function (req, res) {
    if (req.method !== 'POST') {
        return res.status(400).json({ message: "Bad Request" });
    }
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    req.checkBody(vehicleValidationSchema.isValidVehicleData);
    const errors = req.validationErrors();

    if (errors) {
        return res.status(200).json({ message: errors[0].msg });
    }

    if (req.body.cabType != "" && (req.body.seat != "" || req.body.stop != "" || req.body.time != "")) {
        return res.status(200).json({ message: "Select Unique Vehicle type" });
    }

    if (req.body.cabType == "") {
        req.checkBody(vehicleValidationSchema.isValidCarrierData);
        const err = req.validationErrors();
        if (err) {
            return res.status(200).json({ message: err[0].msg });
        }
    } else {
        req.checkBody(vehicleValidationSchema.isValidCabType);
        const err = req.validationErrors();
        if (err) {
            return res.status(200).json({ message: err[0].msg });
        }
    }

    var uID = req.headers.authorization.split(' ')[1];
    await dB.collection('Admin').doc(uID).get().then(async (doc) => {
        if (doc.exists) {
            let stops = [];
            stops = (req.body.stop).split(" ").join();
            stops = stops.split(",");
            let formattedStops = [];
            stops.forEach((stop) => {
                if (stop != "") {
                    formattedStops.push(stop.toLowerCase());
                }
            });

            let vehicleData = {
                Position: {
                    "geohash": "",
                    "geopoint": new GeoPoint(0, 0),
                },
                model: String(req.body.model),
                year: String(req.body.year),
                vin: String(req.body.vin),
                registration: String(req.body.registration),
                driver: String(req.body.driver),
                firstNameOwner: String(req.body.fName),
                lastNameOwner: String(req.body.lName),
                phone: String(req.body.phone),
                idType: String(req.body.ownerIdType),
                idNumber: String(req.body.id),
                buildingNo: String(req.body.house),
                streetAddress: String(req.body.address),
                state: String(req.body.state),
                pin: String(req.body.pin),
                vehicleTyle: ((req.body.cabType == "") ? 'Public' : 'Private'),
                seatCapacity: ((req.body.cabType == "") ? Number(req.body.seat) : ""),
                stoppage: ((req.body.cabType == "") ? formattedStops : ""),
                startTime: ((req.body.cabType == "") ? String(req.body.time) : ""),
                currentTime: ((req.body.cabType == "") ? String(req.body.time) : ""),
                currentStops: ((req.body.cabType == "") ? formattedStops : ""),
                passenger: [],
                currentStatus: "AVAILABLE"
            }

            if (req.body.cabType != "") {
                await dB.collection('Private Vehicles').doc(vehicleData.registration).set({
                    "Model": req.body.cabType,
                    "status": "AVAILABLE"
                });
            }

            return Vehicle.doc(vehicleData.registration).set(vehicleData).then(() => {
                res.status(201).json({ message: "Vehicle Registered", status: "OK" });
            }).catch(() => {
                return res.status(408).json({ message: "Request Time Out" });
            });
        } else {
            return res.status(401).json({ message: "Unauthorized" });
        }
    }).catch(() => {
        return res.status(401).json({ message: "Oops ! Something went wrong." });
    });
});

vehicleRoute.put('/vehicles', async function (req, res) {
    console.log(req.body);
    Vehicle.doc(req.body.id).get().then((doc) => {
        if (doc.exists) {
            console.log(doc.data().passenger);
        }
    }).catch(() => {

    });
});

module.exports = vehicleRoute;