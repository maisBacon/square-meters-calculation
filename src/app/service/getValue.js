const axios = require('axios');
const logger = require('../utils/logger');

class GetValue {
  async value() {
    logger.info('GetValue');
    const url =
      process.env.URL_GET_VALUE.toString() || process.env.URL_LOCAL.toString();
    return await axios({
      method: 'get',
      url,
    });
  }
}
module.exports = new GetValue();
