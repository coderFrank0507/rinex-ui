import { type PropsWithChildren } from 'react';
import { cn, hasTargetChild } from '../_utils';
import { ItemContext } from './context';

interface CollapseItemProps extends PropsWithChildren {
	className?: string;
	value: string;
	disabled?: boolean;
}

function CollapseItem({
	className,
	children,
	value,
	disabled = false,
	...props
}: CollapseItemProps) {
	const hasTrigger = hasTargetChild(children, 'Collapse.Item', 'Collapse.Trigger');
	const hasContent = hasTargetChild(children, 'Collapse.Item', 'Collapse.Content');

	return hasTrigger || hasContent ? (
		<ItemContext.Provider value={{ value, disabled }}>
			<div
				data-slot="collapse-item"
				className={cn(
					'text-[var(--ru-text-color)] border-t border-[var(--ru-border-color)] first:border-none',
					className
				)}
				{...props}
			>
				{children}
			</div>
		</ItemContext.Provider>
	) : null;
}

CollapseItem.displayName = 'Collapse.Item';

export default CollapseItem;
