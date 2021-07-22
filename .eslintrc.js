module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': 0,
    indent: ['error', 2, { ignoreComments: false }],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'react/prop-types': 0,
    'react/jsx-indent': ['error', 2],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }]
  }
}
