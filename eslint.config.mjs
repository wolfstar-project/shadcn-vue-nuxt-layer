// eslint.config.mjs
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { withNuxt } from './.nuxt/eslint.config.mjs';
export default withNuxt(
	{
		files: ['**/*.vue'],
		rules: {
			'vue/block-order': [
				'error',
				{
					order: ['template', 'script:not([setup])', 'script[setup]', 'style:not([scoped])', 'style[scoped]']
				}
			],
			'vue/html-self-closing': [
				'warn',
				{
					html: {
						void: 'always',
						normal: 'never'
					}
				}
			],
			'vue/require-explicit-emits': 'warn',
			'vue/max-attributes-per-line': [
				'error',
				{
					singleline: { max: 10 },
					multiline: { max: 1 }
				}
			],
			'vue/no-required-prop-with-default': [
				'error',
				{
					autofix: true
				}
			],

			'vue/no-multiple-template-root': 'off',
			'vue/singleline-html-element-content-newline': 'off'
		}
	},
	eslintPluginPrettierRecommended
);
