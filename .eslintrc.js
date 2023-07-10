module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
  ],
  "rules": {
    "array-bracket-newline": [
      "error",
      { "minItems": 1 }
    ],
    "array-bracket-spacing": ["error", "always"],
    "array-callback-return": "error",
    "array-element-newline": [
      "error",
      { "multiline": true, "minItems": 1 }
    ],
    "arrow-body-style": ["error", "always"],
    "brace-style": ["error", "stroustrup"],
    "computed-property-spacing": [
      "error",
      "always"
    ],
    "consistent-return": "error",
    "curly": "error",
    "func-call-spacing": ["error", "always"],
    "function-call-argument-newline": [
      "error",
      "always"
    ],
    "function-paren-newline": [
      "error",
      { "minItems": 1 }
    ],
    "getter-return": "error",
    "indent": [
      "error",
      2,
      {
        "ArrayExpression": "first",
        "CallExpression": {
          "arguments": "first"
        },
        "FunctionDeclaration": {
          "body": 1,
          "parameters": "first"
        },
        "FunctionExpression": {
          "body": 1,
          "parameters": "first"
        },
        "ObjectExpression": "first",
        "SwitchCase": 2,
        "VariableDeclarator": 2,
        "offsetTernaryExpressions": true
      }
    ],
    "key-spacing": [
      "error",
      { "align": "colon" }
    ],
    "linebreak-style": ["error", "unix"],
    "multiline-ternary": ["error", "always"],
    "no-dupe-args": "error",
    "no-dupe-else-if": "error",
    "no-else-return": [
      "error",
      { "allowElseIf": true }
    ],
    "no-unreachable": "error",
    "object-curly-newline": [
      "error",
      {
        "ExportDeclaration": "always",
        "ImportDeclaration": "never",
        "ObjectExpression": "always",
        "ObjectPattern": "always"
      }
    ],
    "object-property-newline": "error",
    "padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "next": [
          "const",
          "export",
          "throw",
          "try"
        ],
        "prev": "*"
      }
    ],
    "quotes": ["error", "single"],
    "semi": "error",
    "template-curly-spacing": ["error", "always"],
    "template-tag-spacing": ["error", "always"]
  }
}
