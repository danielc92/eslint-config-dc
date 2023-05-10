const eslintConfig = require('./main');
const rxjsConfig = require('./rxjs-addon');
module.exports = {
    ...eslintConfig,
    extends: [
        ...eslintConfig.extends,
        ...rxjsConfig.extends
    ],
    plugins: [
        ...eslintConfig.plugins,
        ...rxjsConfig.plugins
    ]
};