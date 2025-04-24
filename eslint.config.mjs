import typescript from '@typescript-eslint/eslint-plugin';
import playwright from 'eslint-plugin-playwright';
import typescriptParser from '@typescript-eslint/parser';
const { configs: typescriptConfigs } = typescript;
import tseslint from 'typescript-eslint';

export default tseslint.config([
    {
        files: ['**/*.ts', '**/*.js'],
        ignores: ['**/node_modules/***', '**/dist/**', '**/allure-report/**', '**/allure-results/**'],
        plugins: {
            '@typescript-eslint': typescript,
            'playwright': playwright
        },
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            }
        },
        rules: {
            ...typescriptConfigs.recommended.rules,
            ...playwright.configs['flat/recommended'].rules,
            'indent': ['error', 4],
            '@typescript-eslint/no-require-imports': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            'space-before-blocks': 'warn',
            'array-bracket-spacing': 'warn',
            'comma-spacing': 'warn',
            'generator-star-spacing': 'warn',
            'key-spacing': 'warn',
            'no-irregular-whitespace': 'warn',
            'no-trailing-spaces': 'warn',
            'no-mixed-spaces-and-tabs': 'off',
            'block-spacing': 'warn',
            'object-curly-spacing': ['warn', 'always'],
            'semi': 'error',
            'quotes': ['error', 'single'],
            'eol-last': ['error', 'always'],
            '@typescript-eslint/no-var-requires': 0,
            'no-useless-escape': 'off',
            'no-unexpected-multiline': 'off',
            'no-whitespace-before-property': 'warn',
            'no-empty-pattern': 'off',
            'playwright/no-wait-for-selector': 'warn',
            'playwright/expect-expect': 'off',
            'playwright/no-force-option': 'off',
            'playwright/no-networkidle': 'off',
            'playwright/no-conditional-in-test': 'off',
        }
    }
]);
