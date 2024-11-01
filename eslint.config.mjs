import pluginJs from '@eslint/js';
import globals from 'globals';

export default [
  {languageOptions: {globals: globals.browser}},
  pluginJs.configs.recommended,
  {
    rules: {
      'no-console': 'error',
      'no-unused-vars': 'error',
      'no-undef': 'error',
    },
  },
];
