import { createContext, useContext, useState } from 'react';

/** 可用于 Collapse 组件的 props 属性 */
export interface CollapseContextProps {
	/** 是否保持内容 */
	keepContent?: boolean;
	/** 是否为单面板模式 */
	single?: boolean;
	/** 箭头位置 */
	arrowPlacement?: 'left' | 'right';
}

interface CollapseContextValue {
	level: number;
	activeKeys: string[];
	setActiveKeys: (key: string) => void;
}

export const CollapseContext = createContext<CollapseContextProps & CollapseContextValue>({
	level: 0,
	keepContent: false,
	single: false,
	arrowPlacement: 'left',
	activeKeys: [],
	setActiveKeys: () => {}
});

export const ItemContext = createContext<{
	value: string;
	disabled: boolean;
}>({
	value: '',
	disabled: false
});

export const useCollapseContext = () => useContext(CollapseContext);
export const useItemContext = () => useContext(ItemContext);

export const useCollapseValues = (
	values?: string[],
	onChange?: (keys: string[]) => void,
	single?: boolean
) => {
	const [activeKeys, setActiveKeys] = useState<string[]>([]);

	const toggle = (key: string) => {
		const prevKeys = values || activeKeys;
		const setValues = values ? onChange : setActiveKeys;
		if (single) {
			setValues?.(key === prevKeys[0] ? [] : [key]);
		} else {
			setValues?.(prevKeys.includes(key) ? prevKeys.filter((k) => k !== key) : [...prevKeys, key]);
		}
	};

	return {
		activeKeys: values || activeKeys,
		setActiveKeys: toggle
	};
};
