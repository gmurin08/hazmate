const express = require('express');
const router = express.Router();
var jwt = require('express-jwt');

const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms:["HS256"]
});

const userContoller = require('../controller/user');
const shipmentController = require('../controller/shipment');

router
    .route('/register')
    .post(userContoller.register);

router
    .route('/shipments')
    .get(shipmentController.shipmentsFindAll)
    .post(shipmentController.createShipment)

router
    .route('/shipment/:id')
    .get(shipmentController.shipmentFindById)
    .put(shipmentController.shipmentUpdate)
    .delete(shipmentController.shipmentDelete)


module.exports = router;