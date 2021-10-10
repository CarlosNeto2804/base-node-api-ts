const STATUS_CODE = require('../status-code');

module.exports = class ErrorModel {
  constructor(params = {}) {
    this.statusCode = params.statusCode || STATUS_CODE.INTERNAL_SERVER_ERROR;
    this.code = params.code || 'NOT_IDENTIFIED';
    this.message = params.message || '';
  }
};
