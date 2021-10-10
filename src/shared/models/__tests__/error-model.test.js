const ErrorModel = require('../error-model');

describe('ErrorModel', () => {
  it('Create Erro with all Params', () => {
    const fakeError = { statusCode: 422, code: 'TEST0001', message: 'Error' };
    const error = new ErrorModel(fakeError);
    expect(error).toBeInstanceOf(ErrorModel);
    expect(error).toContainAllKeys(['statusCode', 'message', 'code']);
    expect(error.statusCode).toBeNumber().toEqual(fakeError.statusCode);
    expect(error.message).toBeString().toEqual(fakeError.message);
    expect(error.code).toBeString().toEqual(fakeError.code);
  });

  it('Create Erro without Params', () => {
    const error = new ErrorModel();
    expect(error).toBeInstanceOf(ErrorModel);
    expect(error).toContainAllKeys(['statusCode', 'message', 'code']);
    expect(error.statusCode).toBeNumber().toEqual(500);
    expect(error.message).toBeString().toBeEmpty();
    expect(error.code).toBeString().toEqual('NOT_IDENTIFIED');
  });
});
