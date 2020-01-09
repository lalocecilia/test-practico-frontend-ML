const request = require('request');
const config = require('../config');

const defaultClient = request.defaults({
  headers: {
    Accept: 'application/json',
  },
  timeout: config.rest.timeout,
});

exports.defaultClient = defaultClient;
