module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageProvider: 'v8',
  passWithNoTests: true,
  setupFilesAfterEnv: [
    '<rootDir>/test/setup-tests.js',
    '<rootDir>/test/setup-env-vars.js',
  ],
  testPathIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'jest-environment-node',
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
};
