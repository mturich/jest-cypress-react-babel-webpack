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
  moduleDirectories: ['node_modules', 'shared'],
  snapshotSerializers: ['jest-emotion'],
}
