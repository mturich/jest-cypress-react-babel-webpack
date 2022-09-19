const path = require('path')

module.exports = {
  extends: [
    'kentcdodds',
    'kentcdodds/import',
    'kentcdodds/jest',
    'kentcdodds/react',
  ],

  rules: {
    // https://github.com/benmosher/eslint-plugin-import/issues/1446
    'import/named': 0,
    // saved me from an css error but finally css prop has to be style in jsx
    //'react/no-unknown-property': ['error', {ignore: ['css']}],
  },
  settings: {
    'import/resolver': {
      node: {
        // it is important to include './test'
        // to run all the file with modules import
        paths: ['./src', './test'],
        extensions: ['.js', '.ts', '.d.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['**/src/**'],
      settings: {'import/resolver': 'webpack'},
    },
    // unlintes the direct module import of the files in ./tests
    // jest config needed to import them directly as modules
    {
      files: ['**/__tests__/**'],
      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: path.join(__dirname, './jest.config.js'),
          },
        },
      },
    },
  ],
}
