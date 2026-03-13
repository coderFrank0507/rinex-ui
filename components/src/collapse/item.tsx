import { type PropsWithChildren } from 'react';
import { cn, hasTargetChild } from '../_utils';
import { ItemContext } from './context';

interface CollapseItemProps extends PropsWithChildren {
	className?: string;
	value: string;
}

function CollapseItem({ className, children, value, ...props }: CollapseItemProps) {
	const hasTrigger = hasTargetChild(children, 'Collapse.Item', 'Collapse.Trigger');
	const hasContent = hasTargetChild(children, 'Collapse.Item', 'Collapse.Content');

	return hasTrigger || hasContent ? (
		<ItemContext.Provider value={{ value }}>
			<div
				data-slot="collapse-item"
				className={cn('border-b border-[var(--ru-border-color)]', className)}
				{...props}
			>
				{children}
			</div>
		</ItemContext.Provider>
	) : null;
}

CollapseItem.displayName = 'Collapse.Item';

export default CollapseItem;
