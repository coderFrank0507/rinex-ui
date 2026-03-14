import { useContext, type PropsWithChildren } from 'react';
import { cn, hasTargetChild } from '../_utils';
import { CollapseContext, ItemContext } from './context';

interface CollapseItemProps extends PropsWithChildren {
	className?: string;
	value: string;
}

function CollapseItem({ className, children, value, ...props }: CollapseItemProps) {
	const { level } = useContext(CollapseContext);

	const hasTrigger = hasTargetChild(children, 'Collapse.Item', 'Collapse.Trigger');
	const hasContent = hasTargetChild(children, 'Collapse.Item', 'Collapse.Content');

	return hasTrigger || hasContent ? (
		<ItemContext.Provider value={{ value }}>
			<div
				data-slot="collapse-item"
				// style={{ '--ru-collapse-item-indent': `${(level - 1) * 12}px` } as React.CSSProperties}
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
