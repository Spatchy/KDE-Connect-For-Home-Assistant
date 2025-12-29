import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.strictTypeChecked,
      {
        languageOptions: {
          parserOptions: {
            projectService: true,
          },
        },
      },
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      "@stylistic/semi": "error",
      "@stylistic/semi-style": "error",
      "@stylistic/semi-spacing": "error",
      "@stylistic/brace-style": "error",
      "@stylistic/no-trailing-spaces": "error",
      "@stylistic/arrow-parens": "error",
      "@stylistic/arrow-spacing": "error",
      "@stylistic/block-spacing": "error",
      "@stylistic/space-in-parens": "error",
      "@stylistic/space-infix-ops": "error",
      "@stylistic/space-unary-ops": "error",
      "@stylistic/comma-dangle": "error",
      "@stylistic/comma-spacing": "error",
      "@stylistic/comma-style": "error",
      "@stylistic/spaced-comment": "error",
      "@stylistic/eol-last": "error",
      "@stylistic/jsx-quotes": "error",
      "@stylistic/key-spacing": "error",
      "@stylistic/max-statements-per-line": "error",
      "@stylistic/multiline-comment-style": "error",
      "@stylistic/lines-between-class-members": "error",
      "@stylistic/keyword-spacing": "error",
      "@stylistic/new-parens": "error",
      "@stylistic/implicit-arrow-linebreak": "error",
      "@stylistic/no-confusing-arrow": "error",
      "@stylistic/no-extra-semi": "error",
      "@stylistic/no-floating-decimal": "error",
      "@stylistic/no-mixed-operators": "error",
      "@stylistic/no-mixed-spaces-and-tabs": "error",
      "@stylistic/no-multi-spaces": "error",
      "@stylistic/rest-spread-spacing": "error",
      "@stylistic/no-whitespace-before-property": "error",
      "@stylistic/space-before-blocks": "error",
      "@stylistic/nonblock-statement-body-position": "error",
      "@stylistic/object-property-newline": "error",
      "@stylistic/wrap-iife": "error",
      "@stylistic/wrap-regex": "error",
      "@stylistic/indent": ["error", 2],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/padded-blocks": ["error", "never"],
      "@stylistic/template-curly-spacing": ["error", "never"],
      "@stylistic/template-tag-spacing": ["error", "never"],
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/computed-property-spacing": ["error", "always"],
      "@stylistic/dot-location": ["error", "property"],
      "@stylistic/operator-linebreak": ["error", "before"],
      "@stylistic/array-bracket-spacing": ["error", "always"],
      "@stylistic/multiline-ternary": ["error", "always-multiline"],
      "@stylistic/function-paren-newline": ["error", "multiline-arguments"],
      "@stylistic/generator-star-spacing": ["error", "after"],
      "@stylistic/yield-star-spacing": ["error", "after"],
      "@stylistic/max-len": ["error", { "code": 120, "ignoreUrls": true }],
      "@stylistic/newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
      "@stylistic/array-bracket-newline": ["error", { "multiline": true, "minItems": 3 }],
      "@stylistic/array-element-newline": ["error", { "multiline": true, "minItems": 3 }],
      "@stylistic/quote-props": ["error", "consistent-as-needed"],
      "@stylistic/no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1, "maxBOF": 0 }],
      "@stylistic/lines-around-comment": ["error", { "beforeBlockComment": true, "beforeLineComment": true }],
      "@stylistic/space-before-function-paren": ["error", { "anonymous": "always", "named": "never", "asyncArrow": "always" }],
      "@stylistic/no-extra-parens": ["error", "all", {
        "nestedBinaryExpressions": false,
        "ternaryOperandBinaryExpressions": false,
        "enforceForArrowConditionals": false,
        "enforceForFunctionPrototypeMethods": false,
        "ignoreJSX": "multi-line",
      }],
      "@stylistic/object-curly-newline": ["error", {
        "ObjectExpression": { "multiline": true, "minProperties": 3 },
        "ObjectPattern": { "multiline": true, "minProperties": 3 },
        "ExportDeclaration": { "multiline": true, "minProperties": 3 },
        "ImportDeclaration": "never"
      }],
      "@stylistic/padding-line-between-statements": [
        "error",
        { "blankLine": "always", "prev": "*", "next": ["return", "export"] },
        { "blankLine": "always", "prev": "import", "next": "*" },
        { "blankLine": "never", "prev": "import", "next": "import" },
      ]
    }
  },
])
