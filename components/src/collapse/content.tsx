import { useContext, useLayoutEffect, useState, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { CollapseContext, ItemContext } from './context';

interface CollapseContentProps extends PropsWithChildren {
	className?: string;
}

function CollapseContent({ className, children, ...props }: CollapseContentProps) {
	const { expandedItems } = useContext(CollapseContext);
	const { value } = useContext(ItemContext);
	const [height, setHeight] = useState(0);
	const [open, setOpen] = useState(false);

	const hasExpanded = expandedItems.includes(value);

	useLayoutEffect(() => {
		if (hasExpanded) {
			queueMicrotask(() => {
				setOpen(true);
			});
		} else {
			setTimeout(() => {
				setHeight(0);
				setOpen(false);
			}, 300);
		}
	}, [hasExpanded]);

	return (
		<div
			data-slot="collapse-content"
			className={cn('overflow-hidden font-light', className)}
			style={{ '--ru-collapse-content-height': `${height}px` } as React.CSSProperties}
			{...props}
		>
			{open && (
				<div
					ref={(node) => {
						if (node && height === 0) setHeight(node.scrollHeight + 8);
					}}
					className={cn('transition-height duration-300 ease-in-out h-0', {
						'h-[var(--ru-collapse-content-height)]': hasExpanded
					})}
				>
					{children}
				</div>
			)}
		</div>
	);
}

CollapseContent.displayName = 'Collapse.Content';

export default CollapseContent;
