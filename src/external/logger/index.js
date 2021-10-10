const bunyan = require('bunyan');
const { env } = require('../../main/config');

const level = env.application.logger.logLevel;

function getLogger(name = '') {
  const logger = bunyan.createLogger({
    name,
    level,
    streams: [
      {
        stream: process.stdout,
        level,
      },
    ],
    src: true,
  });

  return logger;
}

module.exports = { getLogger };
