import { createContext } from 'react';
import type { ThemeColors } from '../_utils/theme';
import type { Size } from '../_public/types';

interface ConfigProviderProps {
	__used__?: boolean;
	size?: Size;
	/**
	 * 主题色，内置 blue | green | orange | rose | violet 默认：blue
	 * 可自定义 16进制色值
	 */
	primaryColor?: ThemeColors;
	dark?: boolean;
}

export const defaultValues: ConfigProviderProps = {
	__used__: false,
	size: 'default',
	primaryColor: 'default',
	dark: false
};

export const ConfigContext = createContext<ConfigProviderProps>({ __used__: false });

export type { ConfigProviderProps };
