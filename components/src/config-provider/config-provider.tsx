import { type PropsWithChildren } from 'react';
import { Context, defaultValues, type ConfigProviderProps } from './context';

function ConfigProvider({ children, ...props }: ConfigProviderProps & PropsWithChildren) {
	return <Context.Provider value={{ ...defaultValues, ...props }}>{children}</Context.Provider>;
}

export default ConfigProvider;
