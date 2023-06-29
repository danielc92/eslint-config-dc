# eslint-config-platypus

A reusable linting config for eslint with a focus on code quality and readability.

## getting started

#### Using default configuration

install 

```
npm i --save-dev eslint-config-platypus
```

if you do not have typescript
```
npm i --save-dev typescript
```

create a eslint config file `.eslintrc.js`

```js
module.exports = { extends: ["eslint-config-platypus"] }
```

The default configuration contains rules for 
- code quality
- formatting
- jest
- secrets
- typescript

#### Using the React add on

If you wish to use the React configuration, which includes linting rules for react, react hooks as well as jest dom, install these additional dependencies:

```
npm i eslint-plugin-jest-dom eslint-plugin-react eslint-plugin-react-hooks --save-dev
```

Next extend the eslint config

```js
module.exports = { extends: [
    "eslint-config-platypus",
    "eslint-config-platypus/react-addon"
    ] }
```
