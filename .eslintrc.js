const regExCSS = '.+css$';
const regExNPM = '^@?\\w';
const regExReact = '^react';
const regExRelative = '^\\.';
const regExSideEffects = '^\\u0000';

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  ignorePatterns: [
    '/node_modules/',
    '/build/',
    '/src/setupTests.js',
    '/src/serviceWorker.js',
    '/src/index.js',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
  rules: {
    'react/state-in-constructor': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/no-unescaped-entities': 'off',
    'import/extensions': ['error', 'never', { css: 'always', json: 'always' }],
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['jsx', 'tsx'] }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'no-shadow': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      { labelAttributes: ['htmlFor'] },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['postcss.config.js'],
      },
    ],
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function' },
    ],
    'react/require-default-props': 'off',
    'react/no-children-prop': 'off',
    'react/no-unused-prop-types': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.jsx', '*.js', '*.tsx', '*.ts'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              [regExSideEffects],
              [regExReact, regExNPM],
              [regExRelative],
              [regExCSS],
            ],
          },
        ],
      },
    },
    {
      files: [
        '*.stories.ts',
        '*.stories.tsx',
        '*.test.ts',
        '*.test.tsx',
        'jest-setup.ts',
        'webpack.config.ts',
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
