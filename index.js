"use strict";

const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const cors = require('cors')({ origin: true });

const responseHeaderConfig = require('./server/responseHeaderConfig');

const serviceAccount = require('./gs_docs.json');
const sslPort = 4000 || process.env.PORT;
const app = express();
responseHeaderConfig(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(express.static('webpages/public'));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    next();
});

const apiRouteConfig = require('./server/apiRoutingConfig');
apiRouteConfig(app);


app.listen(sslPort, function (err) {
    console.log(/^([0-9]{2,}[\:][0-9]{2,})$/.test('0:1'));
    if (!err) {
        console.log('Starting Server...');
        return;
    }
    console.log(err);
});
