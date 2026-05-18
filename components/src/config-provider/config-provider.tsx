'use client';

import { type PropsWithChildren, useId } from 'react';
import { ConfigContext, type ConfigProviderProps } from './context';
import { colorMap, useThemeCSS } from '../_utils/theme';

function ConfigProvider({
	children,
	primaryColor = colorMap.default,
	dark = false,
	...props
}: ConfigProviderProps & PropsWithChildren) {
	const id = useId();
	const { className, primaryVariables, globalVariables } = useThemeCSS(id, primaryColor);

	return (
		<ConfigContext.Provider value={{ __used__: true, primaryColor, dark, ...props }}>
			{primaryVariables}
			{globalVariables}
			<div id={`ru-config-provider-${id}`} className={`${className} ${dark ? 'dark' : 'light'}`}>
				{children}
			</div>
		</ConfigContext.Provider>
	);
}

ConfigProvider.displayName = 'ConfigProvider';

export default ConfigProvider;
