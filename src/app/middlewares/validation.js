const yup = require('yup');
const constants = require('../constants');
const logger = require('../utils/logger');

class ValidationMiddleware {
  async validationType(req, res, next) {
    logger.info('ValidationMiddleware');
    yup.setLocale({
      number: {
        min: constants.meter.min.message,
        max: constants.meter.max.message,
      },
    });

    yup
      .object()
      .shape({
        value: yup.number().positive(),
        meter: yup
          .number()
          .positive()
          .min(constants.meter.min.value)
          .max(constants.meter.max.value)
          .required(),
      })
      .validate(req.query)
      .then(() => next())
      .catch(err => {
        logger.error(err);
        res.status(400).send({ [err.name]: `${err.errors}` });
      });
  }
}

module.exports = new ValidationMiddleware();
