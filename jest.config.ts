export default {
  setupFilesAfterEnv: [
    '<rootDir>/tests/setupTest.ts',
    '<rootDir>/tests/setup-env-vars.ts',
  ],
  passWithNoTests: true,
  clearMocks: true,
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-node',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  moduleDirectories: ['node_modules', 'src'],

  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
};
