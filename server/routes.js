const express = require('express');
const path = require('path');
const config = require('./config');

const staticRouter = express.Router();
const searchRouter = express.Router();
const apiRouter = express.Router();

module.exports = function (app) {
  staticRouter.use('/', express.static(path.join(__dirname, '../public/statics')));
  app.use(config['static-context'], staticRouter);

  searchRouter.use(require('./controllers'));
  app.use(searchRouter);

  apiRouter.use(require('./api'));
  app.use(apiRouter);
};
