const Express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { validationType } = require('./middlewares/validation');
require('./config/database');
require('./bootstrap');

class Main {
  constructor() {
    this.express = Express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(Express.json());
    this.express.use(cors());
    this.express.use(validationType);
  }

  routes() {
    this.express.use(routes);
  }
}
module.exports = new Main().express;
