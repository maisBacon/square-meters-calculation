/* eslint-disable no-shadow */
const { createLogger, format, transports } = require('winston');

const { combine, timestamp, label, printf } = format;

const myFormat = printf(
  ({ level, message, label, timestamp }) =>
    `${timestamp} [${label}] ${level}: ${message}`,
);

module.exports = createLogger({
  format: combine(label({ label: 'app' }), timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'log/app.log' }),
  ],
});
