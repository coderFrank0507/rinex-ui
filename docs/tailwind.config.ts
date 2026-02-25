import { Config } from 'tailwindcss';

export default {
	darkMode: 'class',
	content: [
		'../components/src/**/*.{js,jsx,ts,tsx}',
		'./docs/**/*.{js,jsx,ts,tsx,mdx}',
		'./theme/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {}
	},
	plugins: []
} satisfies Config;
