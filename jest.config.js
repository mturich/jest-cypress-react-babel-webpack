const path = require('path')

const constConfig = {
  moduleDirectories: [
    'node_modules',
    'src',
    //path.join(__dirname, 'src'),
    'shared',
    'test',
    //path.join(__dirname, 'test'),
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
    {
      ...constConfig,
      runner: 'jest-runner-eslint',
      watchPlugins: ['jest-runner-eslint/watch-fix'],
      displayName: 'lint',
      testMatch: ['<rootDir>/**/*.js']
    },
  ],
  testPathIgnorePatterns: ['/node-modules/'],
}
