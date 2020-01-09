let config = {};
switch (process.env.NODE_ENV) {
  case 'prod':
  default:
    config = require('./environments/dev.json');
    break;
}

module.exports = config;
