const base = require('./base')
module.exports = {
   
    ...base,
    'extends': [
        'eslint:recommended',
        'plugin:pii/recommended',
    ],
    'overrides': [
    // ONLY TEST FILES
    {
        'files': ['**/__tests__/**/*.[t|j]s'],
        'plugins': ['jest'],
        'extends': ['plugin:jest/recommended'],
        'rules': {  
        'jest/prefer-expect-assertions': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/max-expects': ['error', {max: 2}],
        'jest/prefer-lowercase-title': 'error',
        'jest/no-deprecated-functions': 'error',
        'jest/prefer-hooks-in-order': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/prefer-equality-matcher': 'error',
        'jest/no-conditional-in-test': 'error'
        }
    }
    ],
    'plugins': [
        'no-secrets',
        'sonarjs',
        'pii'
    ],
    'rules': {
        // SECURITY: SECRETS (ZERO TOLERANCE)
        'no-secrets/no-secrets': 'error',
        
        // CODE QUALITY: SONARJS (ZERO TOLERANCE)
        'sonarjs/cognitive-complexity': 'error',
        'sonarjs/elseif-without-else': 'error',
        'sonarjs/max-switch-cases': 'error',
        'sonarjs/no-all-duplicated-branches': 'error',
        'sonarjs/no-collapsible-if': 'error',
        'sonarjs/no-collection-size-mischeck': 'error',
        'sonarjs/no-duplicate-string': 'error',
        'sonarjs/no-duplicated-branches': 'error',
        'sonarjs/no-element-overwrite': 'error',
        'sonarjs/no-empty-collection': 'error',
        'sonarjs/no-extra-arguments': 'error',
        'sonarjs/no-gratuitous-expressions': 'error',
        'sonarjs/no-identical-conditions': 'error',
        'sonarjs/no-identical-expressions': 'error',
        'sonarjs/no-identical-functions': 'error',
        'sonarjs/no-ignored-return': 'error',
        'sonarjs/no-inverted-boolean-check': 'error',
        'sonarjs/no-nested-switch': 'error',
        'sonarjs/no-nested-template-literals': 'error',
        'sonarjs/no-one-iteration-loop': 'error',
        'sonarjs/no-redundant-boolean': 'error',
        'sonarjs/no-redundant-jump': 'error',
        'sonarjs/no-same-line-conditional': 'error',
        'sonarjs/no-small-switch': 'error',
        'sonarjs/no-unused-collection': 'error',
        'sonarjs/no-use-of-empty-return-value': 'error',
        'sonarjs/no-useless-catch': 'error',
        'sonarjs/non-existent-operator': 'error',
        'sonarjs/prefer-immediate-return': 'error',
        'sonarjs/prefer-object-literal': 'error',
        'sonarjs/prefer-single-boolean-return': 'error',
        'sonarjs/prefer-while': 'error'
    }
}