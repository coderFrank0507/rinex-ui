import { useContext, useEffect } from 'react';
import { ConfigContext } from '../config-provider';
import { defaultValues } from '../config-provider/context';
import { hasInitGlobalThemeColor, initGlobalThemeColor } from './theme';

let warned = false;

export function useConfigContext() {
	const config = useContext(ConfigContext);

	useEffect(() => {
		if (!config.__used__ && !warned) {
			// eslint-disable-next-line no-console
			console.error(
				'rinex-ui: Please wrap your application with <ConfigProvider>...</ConfigProvider>'
			);
			warned = true;
		}
	}, [config.__used__]);

	if (!hasInitGlobalThemeColor && !config.__used__) {
		initGlobalThemeColor();
	}

	return { ...defaultValues, ...config };
}
