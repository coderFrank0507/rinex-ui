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

export function setThemeColor(primaryColor: ThemeColors, container?: HTMLElement) {
	const color = isHexColor(primaryColor) ? primaryColor : (colors[primaryColor] ?? '#1447e6');
	themeColorChange(color, container);
}

interface ConfigProviderProps {
	theme?: 'light' | 'dark';
	size?: 'small' | 'default' | 'large';
	/**
	 * 主题色，内置 blue | green | neutral | orange | rose | violet | yellow 默认：blue
	 * 可自定义 16进制色值
	 */
	primaryColor?: ThemeColors;
	/**
	 * 主题作用域，默认：document.head
	 */
	themeScope?: HTMLElement;
}

export const defaultValues: ConfigProviderProps = {
	theme: 'light',
	size: 'default',
	primaryColor: 'blue'
};

export const Context = createContext(defaultValues);

export type { ConfigProviderProps };
