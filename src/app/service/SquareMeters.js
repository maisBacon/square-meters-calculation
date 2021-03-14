const { currency } = require('../utils/intl');
const logger = require('../utils/logger');
const GetValue = require('./getValue');

class SquareMetersService {
  async calculation(meter, value) {
    logger.info('SquareMetersService');
    const getValue = !value && (await GetValue.value());
    const price = value || getValue.data.value;
    const result = meter * price;
    logger.info('Call currency method');
    return currency(result);
  }
}

module.exports = new SquareMetersService();
