function isRequired() {
  return process.env.NODE_ENV !== 'test';
}

module.exports = { isRequired };
