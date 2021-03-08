require('../bootstrap');

module.exports = {
  mongo: {
    path: process.env.DB_PATH,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
