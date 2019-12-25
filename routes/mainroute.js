"use strict";

const express = require('express'),
    path = require('path'),
    admin = require('firebase-admin'),
    mainRoute = express.Router();

const dB = admin.firestore();
const Admin = dB.collection('Admin');

mainRoute.get('/', function (req, res) {
    res.status(200).sendFile('home.html', { root: path.join(__dirname, '../webpages/views') })
});

mainRoute.get('/login', function (req, res) {
    res.status(200).sendFile('login.html', { root: path.join(__dirname, '../webpages/views') })
});

mainRoute.post('/login', function (req, res) {
    if (req.method !== "POST") {
        return res.status(400).json({ message: "Bad Request" });
    }
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Unauthorised" });
    }

    var uID = req.headers.authorization.split('Bearer ')[1];
    if (uID !== req.body.Uid) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    return Admin.doc(uID).get().then((doc) => {
        if (doc.exists) {
            res.sendFile('dashboard.html', { root: path.join(__dirname, '../webpages/views/') });
        } else {
            res.status(401).json({ message: "Unauthorized" });
        }
    }).catch((err) => {
        console.log(err);
        res.status(401).json({ message: "Unauthorized" });
    });
});

mainRoute.get('/dashboard', function (req, res) {
    return res.status(200).sendFile('dashboard.html', { root: path.join(__dirname, '../webpages/views') });
});

module.exports = mainRoute; 