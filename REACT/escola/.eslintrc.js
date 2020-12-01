module.exports = {
  env: {
    browser: true,
    es6: true,
    // es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    // ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    // 'prettier/prettier': 0,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'func-names': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
  },
};
