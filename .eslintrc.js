module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'array-bracket-newline': ['error', 'consistent']
    }
}
