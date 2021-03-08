const SquareMetersService = require('../service/SquareMeters');
const logger = require('../utils/logger');

class SquareMetersController {
  async calculation(req, res) {
    try {
      const { meter, value } = req.query;
      logger.info('SquareMetersController');
      const response = await SquareMetersService.calculation(meter, value);
      logger.info(`Response success ${response}`);
      return res.status(200).send({ total: response });
    } catch (err) {
      logger.error(err.message);
      return res.status(500).send({ total: err.message });
    }
  }
}

module.exports = new SquareMetersController();
