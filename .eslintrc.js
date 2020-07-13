module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
  ],
  plugins: ['react', 'jest', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    'react/prop-types': 'off',
    'no-unused-vars': ['error', { varsIgnorePattern: '_.+', argsIgnorePattern: '_.+' }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['src', 'node_modules'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['webpack.config.js'],
};
