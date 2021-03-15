const { currency } = require('../utils/intl');
const logger = require('../utils/logger');
const GetValue = require('./getValue');

class SquareMetersService {
  async calculation(meter, value) {
    logger.info('SquareMetersService');
    const getValue = !value && this.value();
    const price = value || getValue.data.value;
    const result = meter * price;
    logger.info('Call currency method');
    return currency(result);
  }

  async value() {
    return await GetValue.value();
  }
}

module.exports = new SquareMetersService();
