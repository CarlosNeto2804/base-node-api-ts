const { OriginNotAllowedByCors } = require('../../errors');

function validateOrigin(allowedOrigin = []) {
  return (req, res, next) => {
    if (allowedOrigin.includes('*')) {
      return next();
    }

    if (allowedOrigin.includes(req.get('origin'))) {
      return next();
    }

    return res.status(OriginNotAllowedByCors.statusCode).send(OriginNotAllowedByCors);
  };
}

module.exports = { validateOrigin };
