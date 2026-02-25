import './index.css';
import { ConfigProvider } from 'rinex-ui';
import type { RootProps } from '@rspress/core/theme';

export function Root({ children }: RootProps) {
	return <ConfigProvider>{children}</ConfigProvider>;
}

export * from '@rspress/core/theme-original';
