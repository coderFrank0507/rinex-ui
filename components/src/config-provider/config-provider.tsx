import { type PropsWithChildren, useId } from 'react';
import { ConfigContext, type ConfigProviderProps } from './context';
import { colorMap, useThemeCSS } from '../_utils/theme';

function ConfigProvider({
	children,
	primaryColor = colorMap.blue,
	...props
}: ConfigProviderProps & PropsWithChildren) {
	const id = useId();
	const { className, cssVariables } = useThemeCSS(id, primaryColor);

	return (
		<ConfigContext.Provider value={{ __used__: true, primaryColor, ...props }}>
			<style data-token={`ru-theme-variables-${id}`}>{`.${className}{${cssVariables}}`}</style>
			<div id={`ru-config-provider-${id}`} className={className}>
				{children}
			</div>
		</ConfigContext.Provider>
	);
}

export default ConfigProvider;
