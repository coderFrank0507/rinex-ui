import { createContext } from 'react';

type ThemeColors = 'blue' | 'green' | 'neutral' | 'orange' | 'rose' | 'violet' | string;

export const colors: Record<ThemeColors, string> = {
	blue: '#1447e6',
	green: '#5ea600',
	neutral: '#171717',
	orange: '#f64900',
	rose: '#ed0040',
	violet: '#8023ff'
};

interface ConfigProviderProps {
	__used__?: boolean;
	size?: 'lg' | 'default' | 'sm';
	/**
	 * 主题色，内置 blue | green | neutral | orange | rose | violet 默认：blue
	 * 可自定义 16进制色值
	 */
	primaryColor?: ThemeColors;
}

export const defaultValues: ConfigProviderProps = {
	__used__: false,
	size: 'default',
	primaryColor: 'blue'
};

export const ConfigContext = createContext<ConfigProviderProps>({ __used__: false });

export type { ConfigProviderProps };
