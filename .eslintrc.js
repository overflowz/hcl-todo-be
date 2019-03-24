// NOTES: these are my favorite configuration rules for ESLint.
module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "no-console": "off",
    "no-underscore-dangle": "off",
    "no-bitwise": "off",
    "import/no-extraneous-dependencies": "warn",
    "no-else-return": "off",
    "class-methods-use-this": "off",
    "arrow-parens": "off",
    "arrow-body-style": "off",
    "func-names": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
  },
};
