module.exports = {
  ...require('./jest.server'),
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotSerializers: ['jest-emotion'],
  coverageThreshold: {
    global: {
      statements: 34,
      branches: 20,
      functions: 31,
      lines: 29,
    },
    './src/shared/utils.js': {
      statements: 100,
      branches: 80,
      functions: 100,
      lines: 100,
    },
  },
  testMatch: ['**/__tests__/**/*.js'],
}
