const path = require('path')

const constConfig = {
  //rootDir: path.join(__dirname, '..'),
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, 'src'),
    'shared',
    path.join(__dirname, 'test'),
  ],
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
}

module.exports = {
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageThreshold: {
    global: {
      statements: 31,
      branches: 20,
      functions: 28,
      lines: 29,
    },
    './src/shared/utils.js': {
      statements: 100,
      branches: 80,
      functions: 100,
      lines: 100,
    },
  },
  projects: [
    {
      ...constConfig,
      displayName: 'client',
      testEnvironment: 'jest-environment-jsdom',
      setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
      snapshotSerializers: ['jest-emotion'],
      testMatch: ['**/__tests__/**/*.js'],
    },
    {
      ...constConfig,
      displayName: 'server',
      coverageDirectory: path.join(__dirname, '../coverage/server'),
      testEnvironment: 'jest-environment-node',
      testMatch: ['**/__server_tests__/**/*.js'],
    },
  ],
  testPathIgnorePatterns: ['/node-modules/'],
}
