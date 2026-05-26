import { defineConfig } from '@rspress/core';
import { pluginPreview } from '@rspress/plugin-preview';

export default defineConfig({
	root: 'docs',
	// globalStyles: path.resolve(__dirname, './tailwind.css'),
	plugins: [pluginPreview()],
	themeConfig: {
		socialLinks: [
			{
				icon: 'github',
				mode: 'link',
				content: 'https://github.com/coderFrank0507/rinex-ui'
			}
		]
	}
});
