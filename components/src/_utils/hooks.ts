import { useContext } from 'react';
import { ConfigContext } from '../config-provider';
import { defaultValues } from '../config-provider/context';
import { hasInitGlobalThemeColor, initGlobalThemeColor } from './theme';

export function useConfigContext() {
	const config = useContext(ConfigContext);
	if (!hasInitGlobalThemeColor && !config.__used__) {
		console.log('hasInitGlobalThemeColor');
		initGlobalThemeColor();
	}
	return { ...defaultValues, ...config };
}
