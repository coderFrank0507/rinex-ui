import type { Config } from 'tailwindcss';

export default {
	darkMode: 'class',
	content: ['../components/src/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}']
} satisfies Config;
