const { MethodNotAllowed } = require('../../errors');

function validateMethod(allowedMethods = []) {
  return (req, res, next) => {
    if (allowedMethods.includes(req.method)) {
      return next();
    }

    return res.status(MethodNotAllowed.statusCode).send(MethodNotAllowed);
  };
}

module.exports = { validateMethod };
