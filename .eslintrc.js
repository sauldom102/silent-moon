module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks', 'jest', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: ['@react-native-community', 'airbnb-typescript', 'prettier'],
  env: {
    'jest/globals': true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'babel-module': {},
      node: {
        extensions: ['.d.ts'],
      },
    },
  },
  rules: {
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'eslint-comments/no-unlimited-disable': 0,
    'eslint-comments/no-unused-disable': 0,
    'import/order': [
      'error',
      {
        groups: [
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: 'styled-components/native',
            patternOptions: { matchBase: true },
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-native',
            patternOptions: { matchBase: true },
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react',
            patternOptions: { matchBase: true },
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
