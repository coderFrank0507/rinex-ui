'use client';

import type { PropsWithChildren } from 'react';
import { useConfigContext } from '../_utils/hooks';
import { cn, hasTargetChild } from '../_utils';
import { CollapseContext, useCollapseValues, type CollapseContextProps } from './hooks';

interface CollapseProps extends PropsWithChildren, CollapseContextProps {
	/** 自定义类名 */
	className?: string;
	/** 展开的项的 key 数组 */
	activeKeys?: string[];
	/** 展开项改变时的回调函数 */
	onChange?: (keys: string[]) => void;
}

const Collapse = ({
	className,
	activeKeys: initialActiveKeys,
	children,
	onChange,
	...contextProps
}: CollapseProps) => {
	const context = useConfigContext();

	const { activeKeys, setActiveKeys } = useCollapseValues(
		initialActiveKeys,
		onChange,
		contextProps.single
	);

	hasTargetChild(children, 'Collapse', 'Collapse.Item');

	return (
		<CollapseContext.Provider value={{ activeKeys, setActiveKeys, ...contextProps }}>
			<div
				data-slot="collapse-root"
				style={{ '--ru-collapse-item-indent': '16px' } as React.CSSProperties}
				className={cn('ml-[var(--ru-collapse-item-indent)]', className)}
			>
				{children}
			</div>
		</CollapseContext.Provider>
	);
};

Collapse.displayName = 'Collapse';

export default Collapse;
