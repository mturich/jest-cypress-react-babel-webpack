const path = require('path')

module.exports = {
  //modulePaths: [path.join(__dirname, 'src')],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // makes all module.css usable
    '\\.module\\.css$': 'identity-obj-proxy',
    //ignores ccs with the mock
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  // only necessary if shared files are imported as modules (similar to webpack config)
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, 'src'),
    'shared',
    path.join(__dirname, 'test'),
  ],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotSerializers: ['jest-emotion'],
  // setup for which files should be included in the test coverage 
  collectCoverageFrom: ['**/src/**/*.js'],
  // set up threshold for test coverage`
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
}
