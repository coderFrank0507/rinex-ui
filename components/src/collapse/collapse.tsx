'use client';

import type { PropsWithChildren } from 'react';
import { cn, hasTargetChild } from '../_utils';
import {
	CollapseContext,
	useCollapseContext,
	useCollapseValues,
	type CollapseContextProps
} from './hooks';

export interface CollapseProps extends PropsWithChildren, CollapseContextProps {
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
	arrowPlacement = 'left',
	...contextProps
}: CollapseProps) => {
	const { level } = useCollapseContext();

	const { activeKeys, setActiveKeys } = useCollapseValues(
		initialActiveKeys,
		onChange,
		contextProps.accordion
	);

	hasTargetChild(children, 'Collapse', 'Collapse.Item');

	return (
		<CollapseContext.Provider
			value={{ activeKeys, setActiveKeys, arrowPlacement, level: level + 1, ...contextProps }}
		>
			<div
				data-slot="collapse-root"
				style={{ marginLeft: level > 0 ? '16px' : 0 }}
				className={cn('w-full overflow-hidden', className)}
			>
				{children}
			</div>
		</CollapseContext.Provider>
	);
};

Collapse.displayName = 'Collapse';

export { Collapse };
