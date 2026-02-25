import { createContext } from 'react';

interface ConfigProviderProps {
	theme?: 'light' | 'dark';
	size?: 'sm' | 'default' | 'lg';
}

export const defaultValues: ConfigProviderProps = {
	theme: 'light',
	size: 'default'
};

export const Context = createContext(defaultValues);

export type { ConfigProviderProps };
