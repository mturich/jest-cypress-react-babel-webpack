const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'),
  roots: [
    '<rootDir>',
    '/Users/michaelurich/webDev/kcd/jest-cypress-react-babel-webpack/',
  ],
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, '../src'),
    'shared',
    path.join(__dirname),
  ],
  modulePaths: [
    '/Users/michaelurich/webDev/kcd/jest-cypress-react-babel-webpack/test',
    '/Users/michaelurich/webDev/kcd/jest-cypress-react-babel-webpack/src',
  ],
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./style-mock.js'),
  },
  collectCoverageFrom: ['**/src/**/*.js'],
}
