"use strict";

const cors = require('cors');
const mainRoute = require('../routes/mainroute');
const vehicleRoute = require('../routes/vehicle');
const driverRoute = require('../routes/driver');

var configApiRoutes = function (app) {
    app.use(cors());
    app.use(mainRoute, vehicleRoute, driverRoute);
}

module.exports = configApiRoutes;