const { Router } = require('express');
const SquareMetersController = require('./controllers/SquareMeters');

const routes = Router();

routes.get('/square-meters/calculation', SquareMetersController.calculation);

module.exports = routes;
