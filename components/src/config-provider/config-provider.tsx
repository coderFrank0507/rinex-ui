import { type PropsWithChildren, useId, useMemo } from 'react';
import { ConfigContext, type ConfigProviderProps } from './context';
import { colorMap, useThemeCSS } from '../_utils/theme';

function ConfigProvider({
	children,
	primaryColor = colorMap.blue,
	dark = false,
	...props
}: ConfigProviderProps & PropsWithChildren) {
	const id = useId();
	const { className, cssVariables } = useThemeCSS(id, primaryColor);

	const darkClass = useMemo(
		() => (
			<style
				data-token={`ru-theme-variables-${id}`}
			>{`.${className}.light{--ru-text-color:#000;--ru-border-color:#d1d5dc;--ru-placeholder-color:#9da3af}
			.${className}.dark{--ru-text-color:#fff;--ru-border-color:#9da3af;--ru-placeholder-color:#6c7280}`}</style>
		),
		[className, id]
	);

	return (
		<ConfigContext.Provider value={{ __used__: true, primaryColor, dark, ...props }}>
			<style data-token={`ru-primary-variables-${id}`}>{`.${className}{${cssVariables}}`}</style>
			{darkClass}
			<div id={`ru-config-provider-${id}`} className={`${className} ${dark ? 'dark' : 'light'}`}>
				{children}
			</div>
		</ConfigContext.Provider>
	);
}

export default ConfigProvider;
