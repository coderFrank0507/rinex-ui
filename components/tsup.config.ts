import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/**/*.{ts,tsx,svg}', '!src/**/*.d.ts'],
	format: ['esm'],
	dts: true,
	clean: true,
	outDir: 'dist',
	splitting: false,
	bundle: false,
	loader: {
		'.svg': 'file'
	}
});
