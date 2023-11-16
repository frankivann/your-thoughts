module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
    'semi': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'react/prop-types': 0,
    'quotes': ['error', 'single']
  },
}
