const env = require('env-var');
const { isRequired } = require('../../utils/is-required');

const IS_REQUIRED = isRequired();

module.exports = Object.freeze({
  server: {
    nodeEnv: env.get('NODE_ENV').required(IS_REQUIRED).asString(),
    port: env.get('API_PORT').required(IS_REQUIRED).asPortNumber(),
    defaultLocale: env.get('DEFAULT_LOCALE').required(IS_REQUIRED).asString(),
    requestBodySize: env.get('REQUEST_SIZE').required(IS_REQUIRED).asString(),
  },
  logger: {
    logLevel: env.get('LOG_LEVEL').required(IS_REQUIRED).asString(),
    morganFormat: env.get('MORGAN_FORMAT').required(IS_REQUIRED).asString(),
  },
  cors: {
    allowedOrigin: env
      .get('CORS_ALLOWED_ORIGINS')
      .required(IS_REQUIRED)
      .asArray(),
    allowedMethods: env
      .get('CORS_ALLOWED_METHODS')
      .required(IS_REQUIRED)
      .asString(),
  },
});
