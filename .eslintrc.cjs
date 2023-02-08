module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	overrides: [],

	plugins: ['react'],
	rules: {
		'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }],
		'no-console': 'warn',
		'no-eval': 'error',
		'react-hooks/exhaustive-deps': 0,
		'react/display-name': 'off',
		'react/prop-types': 'off',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'no-unused-vars': 'warn',
	},
};
