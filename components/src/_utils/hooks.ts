import { useContext } from 'react';
import { Context } from '../config-provider';
import { defaultValues, hasSetThemeColor, setThemeColor } from '../config-provider/context';

export function useConfigContext() {
	const config = useContext(Context);
	if (!hasSetThemeColor && !config.__used__) {
		setThemeColor();
	}
	return { ...defaultValues, ...config };
}
