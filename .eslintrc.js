const IGNORE = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  "extends": "airbnb-base",
  "parser": "babel-eslint",
  "plugins": [
    "flowtype"
  ],
  "rules": {
    "import/no-named-as-default-member": IGNORE,
    "import/no-named-as-default": IGNORE,
    "no-tabs": IGNORE,
    "camelcase": IGNORE,
    "no-console": IGNORE,
    "no-param-reassign": IGNORE,
    "import/prefer-default-export": IGNORE,
    "consistent-return": IGNORE,
    "max-len": IGNORE,
    "no-continue": IGNORE,
    'no-case-declarations': IGNORE,
    "indent": [ERROR, 2, { "SwitchCase": 1, "VariableDeclarator": 1, "ignoredNodes": ["TemplateLiteral > *"] }],
    "class-methods-use-this": IGNORE,
    "no-restricted-syntax": IGNORE,
    "prefer-template": IGNORE,
    "no-plusplus": IGNORE,
    "default-case": IGNORE,
    "no-useless-constructor": IGNORE,
    "jsx-a11y/accessible-emoji": IGNORE,
    "no-use-before-define": IGNORE,
    "curly": IGNORE,
    "no-unused-expressions": [ERROR, { "allowShortCircuit": true }],
    "prefer-destructuring": IGNORE,
    "no-await-in-loop": IGNORE,
    "global-require": IGNORE,
    "func-names": IGNORE,
    "linebreak-style": IGNORE,
    "no-empty-function": IGNORE,
    "no-labels": IGNORE,
    "func-names": IGNORE,
    "guard-for-in": IGNORE,
    "radix": IGNORE,
    "import/no-dynamic-require": IGNORE,
    "quote-props": IGNORE,
    "no-shadow": IGNORE,
    "no-extra-label": IGNORE,
    "arrow-parens": IGNORE,
    "quotes": IGNORE,
    "prefer-rest-params": IGNORE,
    "no-nested-ternary": IGNORE,
    "newline-per-chained-call": IGNORE,
    "no-restricted-globals": IGNORE,
    "dot-notation": IGNORE,
    "arrow-body-style": IGNORE,
    "no-loop-func": IGNORE,
    "no-useless-escape": IGNORE,
    "no-trailing-spaces": IGNORE,
    "import/order": IGNORE,
    "no-lonely-if": IGNORE,
  },
  "env": {
    "jest": true
  },
};