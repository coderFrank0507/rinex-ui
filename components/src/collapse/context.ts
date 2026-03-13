import { createContext } from 'react';

interface CollapseContextValue {
	expandedItems: string[];
	setExpandedItems: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface CollapseContextProps {
	single?: boolean;
}

export const CollapseContext = createContext<CollapseContextProps & CollapseContextValue>({
	expandedItems: [],
	setExpandedItems: () => {},
	single: false
});

export const ItemContext = createContext<{
	value: string;
}>({
	value: ''
});
