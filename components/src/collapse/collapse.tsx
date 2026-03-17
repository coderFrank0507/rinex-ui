'use client';

import { useContext, useState, type PropsWithChildren } from 'react';
import { useConfigContext } from '../_utils/hooks';
import { cn, hasTargetChild } from '../_utils';
import { CollapseContext, type CollapseContextProps } from './context';

interface CollapseProps extends PropsWithChildren, CollapseContextProps {
	className?: string;
	activeKeys?: string[];
	onChange?: (keys: string[]) => void;
}

const Collapse = ({
	className,
	activeKeys: initialActiveKeys,
	single = false,
	children,
	onChange,
	...props
}: CollapseProps) => {
	const context = useConfigContext();
	const { level } = useContext(CollapseContext);

	const [activeKeys, setActiveKeys] = useState<string[]>(initialActiveKeys || []);

	hasTargetChild(children, 'Collapse', 'Collapse.Item');

	const toggle = (key: string) => {
		const setKeys = initialActiveKeys ? onChange : setActiveKeys;
		const prevKeys = initialActiveKeys || activeKeys;
		if (single) {
			setKeys?.(key === prevKeys[0] ? [] : [key]);
		} else {
			setKeys?.(prevKeys.includes(key) ? prevKeys.filter((k) => k !== key) : [...prevKeys, key]);
		}
	};

	return (
		<CollapseContext.Provider
			value={{ activeKeys: initialActiveKeys || activeKeys, toggle, single, level: level + 1 }}
		>
			<div
				data-slot="collapse-root"
				style={{ '--ru-collapse-item-indent': `${level * 16}px` } as React.CSSProperties}
				className={cn('ml-[var(--ru-collapse-item-indent)]', className)}
				{...props}
			>
				{children}
			</div>
		</CollapseContext.Provider>
	);
};

Collapse.displayName = 'Collapse';

export default Collapse;
