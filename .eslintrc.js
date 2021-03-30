module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: 'tsconfig.json',
    createDefaultProgram: true,
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'no-throw-literal': 'off',
    'class-methods-use-this': 'off',
    'linebreak-style': 'off',
    'no-underscore-dangle': 'off',
    'max-len': 'off',
    'max-classes-per-file': ['error', 2],
    'react/jsx-one-expresion-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx'],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-throw-literal': ['error'],
    '@typescript-eslint/no-floating-promises': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
