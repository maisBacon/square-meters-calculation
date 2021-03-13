const { currency } = require('../utils/intl');
const logger = require('../utils/logger');

class SquareMetersService {
  async calculation(meter, value) {
    // throw new Error('fudeo');
    logger.info('SquareMetersService');
    const result = meter * value;
    logger.info('Call currency method');
    return currency(result);
  }
}

module.exports = new SquareMetersService();
