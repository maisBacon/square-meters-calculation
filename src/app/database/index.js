const mongoose = require('mongoose');
const dbConfig = require('../config/database');

const { path, options } = dbConfig.mongo;

const db = mongoose
  .connect(path, options)
  .then(() => console.log(`✔ database is running at ${path}`));

module.exports = db;
