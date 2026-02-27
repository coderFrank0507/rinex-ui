import { createContext } from 'react';
import { isHexColor, themeColorChange } from '../_utils/theme';

type ThemeColors = 'blue' | 'green' | 'neutral' | 'orange' | 'rose' | 'violet' | string;

export const colors: Record<ThemeColors, string> = {
	blue: '#1447e6',
	green: '#5ea600',
	neutral: '#171717',
	orange: '#f64900',
	rose: '#ed0040',
	violet: '#8023ff'
};

export let hasSetThemeColor = false;
export function setThemeColor(primaryColor: ThemeColors = 'blue', container?: HTMLElement) {
	const color = isHexColor(primaryColor) ? primaryColor : (colors[primaryColor] ?? '#1447e6');
	themeColorChange(color, container);
	hasSetThemeColor = true;
}

interface ConfigProviderProps {
	__used__?: boolean;
	size?: 'lg' | 'default' | 'sm';
	/**
	 * 主题色，内置 blue | green | neutral | orange | rose | violet 默认：blue
	 * 可自定义 16进制色值
	 */
	primaryColor?: ThemeColors;
	/**
	 * 主题作用域，默认：document.head
	 */
	themeScope?: HTMLElement;
}

export const defaultValues: ConfigProviderProps = {
	__used__: false,
	size: 'default',
	primaryColor: 'blue'
};

export const Context = createContext<ConfigProviderProps>({ __used__: false });

export type { ConfigProviderProps };
