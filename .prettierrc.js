module.exports = {
  arrowParens: 'always',
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  semi: true,
  printWidth: 120,
  plugins: ['prettier-plugin-tailwindcss', '@ianvs/prettier-plugin-sort-imports'],
  tailwindConfig: './tailwind.config.ts',
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@/types/(.*)$',
    '',
    '^@/data/(.*)$',
    '^@/config/(.*)$',
    '^@/context/(.*)$',
    '^@/store/(.*)$',
    '^@/libs/(.*)$',
    '^@/utils/(.*)$',
    '^@/validations/(.*)$',
    '^@/hooks/(.*)$',
    '',
    '^@/components/ui/(.*)$',
    '',
    '^@/components/(.*)$',
    '^@/registry/(.*)$',
    '',
    '^@/styles/(.*)$',
    '',
    '^@/public/(.*)$',
    '^@/app/(.*)$',
    '',
    '^[./]',
  ],
};
