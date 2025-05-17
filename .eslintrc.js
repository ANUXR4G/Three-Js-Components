module.exports = {
    extends: ['next', 'next/core-web-vitals', 'eslint:recommended'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off', // turn off a TypeScript rule
      'react/react-in-jsx-scope': 'off', // for React 17+
    },
  };
  