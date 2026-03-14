import { createContext } from 'react';

interface CollapseContextValue {
	activeKeys: string[];
	toggle: (key: string) => void;
	level: number;
}

export interface CollapseContextProps {
	single?: boolean;
}

export const CollapseContext = createContext<CollapseContextProps & CollapseContextValue>({
	activeKeys: [],
	toggle: () => {},
	single: false,
	level: 0
});

export const ItemContext = createContext<{
	value: string;
	disabled: boolean;
}>({
	value: '',
	disabled: false
});
