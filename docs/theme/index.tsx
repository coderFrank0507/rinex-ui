import './index.css';
import { ConfigProvider } from 'rinex-ui';
import type { RootProps } from '@rspress/core/theme';

export function Root({ children }: RootProps) {
	const dark = document.documentElement.classList.contains('dark');
	return (
		<ConfigProvider primaryColor="blue" dark={dark}>
			{children}
		</ConfigProvider>
	);
}

export * from '@rspress/core/theme-original';
