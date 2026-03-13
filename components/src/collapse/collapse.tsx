'use client';

import { useState, type PropsWithChildren } from 'react';
import { useConfigContext } from '../_utils/hooks';
import { cn, hasTargetChild } from '../_utils';
import { CollapseContext, type CollapseContextProps } from './context';

interface CollapseProps extends PropsWithChildren, CollapseContextProps {
	className?: string;
}

const Collapse = ({ className, single = false, children, ...props }: CollapseProps) => {
	const context = useConfigContext();

	const [expandedItems, setExpandedItems] = useState<string[]>([]);

	hasTargetChild(children, 'Collapse', 'Collapse.Item');

	return (
		<CollapseContext.Provider value={{ expandedItems, setExpandedItems, single }}>
			<div data-slot="collapse-content" className={cn(className)} {...props}>
				{children}
			</div>
		</CollapseContext.Provider>
	);
};

Collapse.displayName = 'Collapse';

export default Collapse;
