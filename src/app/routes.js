const { Router } = require('express');
const SquareMetersController = require('./controllers/SquareMeters');
const { adaptRoute } = require('./adapter/handle');

const routes = Router();

routes.get(
  '/square-meters/calculation',
  adaptRoute(SquareMetersController.calculation),
);

module.exports = routes;
