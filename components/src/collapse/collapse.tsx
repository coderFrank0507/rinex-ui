'use client';

import { useContext, useState, type PropsWithChildren } from 'react';
import { useConfigContext } from '../_utils/hooks';
import { cn, hasTargetChild } from '../_utils';
import { CollapseContext, type CollapseContextProps } from './context';

interface CollapseProps extends PropsWithChildren, CollapseContextProps {
	className?: string;
}

const Collapse = ({ className, single = false, children, ...props }: CollapseProps) => {
	const context = useConfigContext();
	const { level } = useContext(CollapseContext);

	const [activeKeys, setActiveKeys] = useState<string[]>([]);

	hasTargetChild(children, 'Collapse', 'Collapse.Item');

	const toggle = (key: string) => {
		if (single) {
			setActiveKeys(key === activeKeys[0] ? [] : [key]);
		} else {
			setActiveKeys((prevKeys) =>
				prevKeys.includes(key) ? prevKeys.filter((k) => k !== key) : [...prevKeys, key]
			);
		}
	};

	return (
		<CollapseContext.Provider value={{ activeKeys, toggle, single, level: level + 1 }}>
			<div
				data-slot="collapse-content"
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
