// optional/additional configuration for projects using React
module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
     
    ],
    'overrides':[
        {
			files: [
            '**/__tests__/**/*.[jt]s?(x)', 
            '**/?(*.)+(spec|test).[jt]s?(x)'],
			extends: ["plugin:jest-dom/recommended"],
		},
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
        "ecmaFeatures": {
            "jsx": true
          }
    },
    plugins: [
        "react", 
        "@typescript-eslint", 
        "jest-dom"
    ],
    rules:  {
        // REACT RULES 
        "react/jsx-handler-names": ["warn", {checkLocalVariables: true}],
        "react/jsx-no-bind": "warn",
        "react/jsx-no-leaked-render": "error",
        "react/jsx-first-prop-new-line": ["warn", "never"],
        "react/jsx-indent-props": ["warn", "first"],
        "react/jsx-newline": ["warn", { "prevent": true, "allowMultilines": false }],
        "react/jsx-boolean-value": "warn",
        "react/jsx-closing-bracket-location": "warn",
        "react/jsx-closing-tag-location": "warn",
        "react/jsx-props-no-multi-spaces": "warn",
        "react/jsx-curly-brace-presence": "warn",
        "react/jsx-pascal-case": "warn",
        "react/jsx-no-useless-fragment": "warn",
        "react/jsx-equals-spacing": ["warn", "never"],
        "react/jsx-curly-spacing": ["warn", {when: "never"}],
        "react/jsx-curly-newline": ["warn", { multiline: "forbid", singleline: "forbid" }],
        "react/jsx-indent": ["warn", 3],
        "react/jsx-wrap-multilines": ["warn", {
            "declaration": "parens-new-line",
            "assignment": "parens-new-line",
            "condition": "parens-new-line",
            "return": "parens-new-line",
            "arrow": "parens-new-line",
          }],
        "react/self-closing-comp": ["warn", {
            "component": true,
            "html": true
          }],
        "react/jsx-tag-spacing": ["warn", {  
            "closingSlash": "never",
            "beforeSelfClosing": "always",
            "afterOpening": "never",
            "beforeClosing": "never"
        }],
        "react/jsx-child-element-spacing": "warn",

        // HOOKS RULES (https://www.npmjs.com/package/eslint-plugin-react-hooks)
        "react-hooks/rules-of-hooks": "warn", 
        "react-hooks/exhaustive-deps": "warn" 
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    env: {
        'browser': true,
        'es2021': true
     }
}