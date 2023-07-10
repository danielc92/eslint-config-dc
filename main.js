const base = require('./src/configs/base');

module.exports = {
   
   ...base,
   'extends': [ 'eslint:recommended', 'plugin:unicorn/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:promise/recommended' ],
   'plugins': [
      '@typescript-eslint',
      'no-secrets',
      'promise',
      'import'
   ],
   'parser': '@typescript-eslint/parser',
   'parserOptions': {
      'ecmaVersion': 'latest',
      'project': './tsconfig.json',
      'sourceType': 'module'
   },
   'settings': {
      'import/parsers': { '@typescript-eslint/parser': [ '.ts', '.tsx' ] },
      'import/resolver': { 'typescript': {} }
   },
   'overrides': [

      // JEST/TESTING (ZERO TOLERANCE)
      // Includes every rule from v27.2.2
      // These rules only apply to .spec.js, .spec.ts, .test.js, .test.ts files
      {
         'files': [ '**/*[spec|test].[t|j]s' ],
         'plugins': [ 'jest' ],
         'extends': [ 'plugin:jest/recommended' ],
         'rules': {
            "jest/consistent-test-it": "error",
            "jest/max-expects": "error",
            "jest/max-nested-describe": "error",
            "jest/no-conditional-in-test": "error",
            "jest/no-duplicate-hooks": "error",
            "jest/no-hooks": "error",
            "jest/no-if": "error",
            "jest/no-large-snapshots": "error",
            "jest/no-restricted-jest-methods": "error",
            "jest/no-restricted-matchers": "error",
            "jest/no-test-return-statement": "error",
            "jest/no-untyped-mock-factory": "error",
            "jest/prefer-called-with": "error",
            "jest/prefer-comparison-matcher": "error",
            "jest/prefer-each": "error",
            "jest/prefer-equality-matcher": "error",
            "jest/prefer-expect-assertions": ["error", {
               'onlyFunctionsWithAsyncKeyword': true,
               'onlyFunctionsWithExpectInLoop': true,
               'onlyFunctionsWithExpectInCallback': true 
            }],
            "jest/prefer-expect-resolves": "error",
            "jest/prefer-hooks-in-order": "error",
            "jest/prefer-hooks-on-top": "error",
            "jest/prefer-lowercase-title": "error",
            "jest/prefer-mock-promise-shorthand": "error",
            "jest/prefer-snapshot-hint": "error",
            "jest/prefer-spy-on": "error",
            "jest/prefer-strict-equal": "error",
            "jest/prefer-to-be": "error",
            "jest/prefer-to-contain": "error",
            "jest/prefer-to-have-length": "error",
            "jest/prefer-todo": "error",
            "jest/require-hook": "error",
            "jest/require-to-throw-message": "error",
            "jest/require-top-level-describe": "error"
         }
      }
   ],
   // NOTE RULES BELOW ARE IN *ADDITION* TO RECOMMENDED CONFIGS
   'rules': {
      // IMPORT RULES (ZERO TOLERANCE)
      'import/no-cycle': [ 'error', { maxDepth: 5 } ],
      'import/no-self-import': 'error',
      'import/default': 'error',
      'import/no-mutable-exports': 'error',
      'import/namespace': 'error',
      'import/named': 'error',
      'import/export': 'error',
      'import/no-empty-named-blocks': 'error',
      // IMPORT RULES (WARN)
      'import/no-unresolved': 'warn',
      // this rule does not seem to work...
      // 'import/no-relative-packages': 'warn',
      'import/no-named-as-default': 'warn',
      'import/no-named-as-default-member': 'warn',
      'import/no-deprecated': 'warn',
      'import/exports-last': 'warn',

      // SECURITY: SECRETS (ZERO TOLERANCE)
      'no-secrets/no-secrets': 'error',

      // TYPESCRIPT RULES (https://typescript-eslint.io/rules/)
      '@typescript-eslint/no-dynamic-delete': 'warn',
      '@typescript-eslint/prefer-readonly': 'warn',
      '@typescript-eslint/sort-type-constituents': 'warn',
      '@typescript-eslint/prefer-return-this-type': 'warn',
      '@typescript-eslint/no-meaningless-void-operator': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-mixed-enums': 'warn',
      '@typescript-eslint/no-unsafe-enum-comparison': 'warn',
      '@typescript-eslint/prefer-enum-initializers': 'warn',
      '@typescript-eslint/prefer-literal-enum-member': 'warn',
      '@typescript-eslint/prefer-includes': 'warn',
      '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
      '@typescript-eslint/array-type': [
         'warn',
         {
            default: 'generic',
            readonly: 'generic' 
         } 
      ],
      
      // ESLINT SUGGESTIONS (https://eslint.org/docs/latest/rules/#suggestions)
      'curly': 'warn',
      'default-case': 'warn',
      'default-case-last': 'warn',
      'no-else-return': 'warn',
      'no-console': 'warn',
      'no-inline-comments': 'warn',
      'no-lonely-if': 'warn',
      'eqeqeq': 'warn',
      'no-new-wrappers': 'warn',
      'no-plusplus': 'warn',
      'no-return-await': 'warn',
      'no-throw-literal': 'warn',
      'no-nested-ternary': 'warn',
      'no-useless-constructor': 'warn',
      'no-useless-rename': 'warn',
      'prefer-spread': 'warn',
      'rest-spread-spacing': [ 'warn', 'never' ],
      'computed-property-spacing': [ 'warn', 'never' ],
      'no-whitespace-before-property': 'warn',
      'yoda': 'warn',
    
      // ESLINT POSSIBLE PROBLEMS (https://eslint.org/docs/latest/rules/#possible-problems)
      'no-self-compare': 'warn',
      'no-unreachable-loop': 'warn',

      // ESLINT LAYOUT & FORMATTING (https://eslint.org/docs/latest/rules/#layout--formatting)
      'multiline-ternary': [ 'warn', 'always' ],
      'indent': [
         'warn',
         3,
         {
            'SwitchCase': 1,
            'ignoredNodes': [
               'JSXElement',
               'JSXElement > *',
               'JSXAttribute',
               'JSXIdentifier',
               'JSXNamespacedName',
               'JSXMemberExpression',
               'JSXSpreadAttribute',
               'JSXExpressionContainer',
               'JSXOpeningElement',
               'JSXClosingElement',
               'JSXFragment',
               'JSXOpeningFragment',
               'JSXClosingFragment',
               'JSXText',
               'JSXEmptyExpression',
               'JSXSpreadChild'
            ] 
         } 
      ],
      'key-spacing': [
         'warn',
         {
            beforeColon: false,
            afterColon: true 
         } 
      ],
      'no-multiple-empty-lines': [ 'warn', { max: 1 } ],
      'semi': [ 'warn', 'always' ],
      'no-multi-spaces': 'warn',
      'space-in-parens': [ 'warn', 'never' ],
      'semi-spacing': 'warn',
      'array-bracket-newline': [
         'warn',
         {
            'multiline': true,
            'minItems': 4
         } 
      ],
      'array-element-newline': [
         'warn',
         {
            'multiline': true,
            'minItems': 4
         } 
      ],
      'new-parens': 'warn',
      'func-call-spacing': 'warn',
      'space-unary-ops': 'warn',
      'space-before-function-paren': [ 'warn', 'always' ],
      'space-before-blocks': [ 'warn', 'always' ],
      'quotes': [ 'warn', 'single' ],
      'array-bracket-spacing': [ 'warn', 'always' ],
      'arrow-spacing': [
         'warn',
         {
            'before': true,
            'after': true 
         } 
      ],
      'object-curly-spacing': [ 'warn', 'always' ],
      'padded-blocks': [ 'warn', 'never' ],
      'arrow-parens': 'warn',
      'comma-spacing': [
         'warn',
         {
            before: false,
            after: true 
         } 
      ],
      'space-infix-ops': 'warn',
      'keyword-spacing': [
         'warn',
         {
            before: true,
            after: true 
         } 
      ],
      'eol-last': [ 'warn', 'always' ],
      // conflicts with padding-line-between-statements
      'newline-after-var': 'off',
      'comma-dangle': [ 'warn', 'never' ],
      'comma-style': [ 'warn', 'last' ],
      'object-property-newline': [ 'warn', { 'allowAllPropertiesOnSameLine': false } ],
      'object-curly-newline': [
         'warn',
         {
            'ObjectExpression': { 'minProperties': 2 },
            'ObjectPattern': { 'multiline': true },
            'ImportDeclaration': {
               'multiline': true,
               'minProperties': 4 
            },
            'ExportDeclaration': {
               'multiline': true,
               'minProperties': 4 
            }
         }
      ],
      'brace-style': [ 'warn', '1tbs', { allowSingleLine: false } ],
      'max-statements-per-line': [ 'warn', { 'max': 1 } ],
      'lines-between-class-members': [ 'warn', 'always', { 'exceptAfterSingleLine': true } ],
      'padding-line-between-statements': ['warn', 
      { blankLine: "always", prev: ["const", "let", "var"], next: "*"}, 
      { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]},
      {
            // always add new line AFTER these
            blankLine: 'always',
            next: '*', 
            prev: [
               'block-like',
               'block',
               'class',
               'for',
               'function',
               'if',
               'multiline-const',
               'multiline-let',
               'switch',
           
            ] 
         },
   ]

   }
};
