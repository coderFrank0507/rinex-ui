import { type PropsWithChildren, useLayoutEffect } from 'react';
import { Context, defaultValues, setThemeColor, type ConfigProviderProps } from './context';

function ConfigProvider({
	children,
	primaryColor = 'blue',
	themeScope,
	...props
}: ConfigProviderProps & PropsWithChildren) {
	useLayoutEffect(() => {
		setThemeColor(primaryColor, themeScope);
	}, [primaryColor, themeScope]);

	return (
		<Context.Provider value={{ ...defaultValues, primaryColor, ...props }}>
			{children}
		</Context.Provider>
	);
}

export default ConfigProvider;
