module.exports = {
    automock: false,
    // setupFiles: [
    //   "./setupJest.js"
    // ],
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(test).ts?(x)'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.svg$': '<rootDir>/svgTransform.js',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '^pages/(.*)': '<rootDir>/src/pages/$1',
        '^constants/(.*)': '<rootDir>/src/constants/$1',
    },
    modulePathIgnorePatterns: ['<rootDir>/src/utils/demo'],
}
