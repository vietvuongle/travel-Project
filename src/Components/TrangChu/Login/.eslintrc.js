module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    rules: {
        // Các luật ESLint khác
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
