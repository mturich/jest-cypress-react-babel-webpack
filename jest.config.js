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
}
