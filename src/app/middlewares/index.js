const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');
const { env } = require('../config');
const { validateOrigin } = require('./validate-cors');
const { validateMethod } = require('./validate-request-method');

function register(app = express()) {
  app.use(helmet());
  app.use(validateOrigin(env.application.cors.allowedOrigin));
  app.use(validateMethod(env.application.cors.allowedMethods));
  app.use(express.json({ limit: env.application.server.requestBodySize }));
  app.use(express.urlencoded({ limit: env.application.server.requestBodySize }));
  app.use(morgan(env.application.logger.morganFormat));
}

module.exports = { register };
