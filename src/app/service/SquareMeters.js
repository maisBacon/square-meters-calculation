const { currency } = require('../utils/intl');
const logger = require('../utils/logger');

class SquareMetersService {
  async calculation(meter, value) {
    logger.info('SquareMetersService');
    const result = meter * value;
    return currency(result);
  }
}

module.exports = new SquareMetersService();
