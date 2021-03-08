const intl = require('intl');

const currency = num =>
  new intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(num);

module.exports = { currency };
