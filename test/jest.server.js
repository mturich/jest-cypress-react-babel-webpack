const path = require('path')

module.exports = {
  ...require('./jest.common.js'),
  coverageDirectory: path.join(__dirname, '../coverage/server'),
  testEnvironment: 'jest-environment-node',
  testMatch: ['**/__server_test__/**/*.js'],
}
