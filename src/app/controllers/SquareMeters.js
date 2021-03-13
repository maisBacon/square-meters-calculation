const SquareMetersService = require('../service/SquareMeters');
const logger = require('../utils/logger');
const { ok, serverError } = require('../helpers/http');

class SquareMetersController {
  async calculation(req, res) {
    try {
      const { meter, value } = req.query;
      logger.info('SquareMetersController');
      const response = await SquareMetersService.calculation(meter, value);
      logger.info(`response success ${response}`);
      return ok(response);
    } catch (err) {
      logger.error(err.stack);
      return serverError();
    }
  }
}

module.exports = new SquareMetersController();
