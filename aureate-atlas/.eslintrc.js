module.exports = {
    env: {
        browser: true,
        node: true
    },
    plugins: ['prettier'],
    extends: ['airbnb', 'prettier'],
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true // Allows for the parsing of JSX
        }
    },
    settings: {
        react: {
            version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
        }
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier',
        'prettier/@typescript-eslint'
    ],
    rules: {
        'prettier/prettier': ['error']
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    }
};
