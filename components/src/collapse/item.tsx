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
					'mt-2 pt-2 border-t border-[var(--ru-border-color)] text-[var(--ru-text-color)] first:border-none first:mt-0 first:pt-0',
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
