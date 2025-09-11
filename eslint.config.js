import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import useClientPlugin from '@naverpay/eslint-plugin-use-client';
import gitignore from 'eslint-config-flat-gitignore';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  gitignore(),
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.tsx'],
    plugins: {
      'use-client': useClientPlugin,
    },
    rules: {
      'use-client/use-client-hook': 'error',
      'use-client/browser-api': 'error',
      'use-client/event-handler': 'error',
    },
  },
];

export default eslintConfig;
