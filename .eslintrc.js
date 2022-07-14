module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': 'interface',
        'format': ['PascalCase'],
        'custom': {
          'regex': '^I[A-Z]',
          'match': true,
        },
      },
    ],
    '@typescript-eslint/array-type': [
      'error',
      {
        'default': 'array-simple',
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        'fixToUnknown': false,
        'ignoreRestArgs': false,
      },
    ],
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
  },
};
