import { useEffect, useState, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { useItemContext, useCollapseContext } from './hooks';

interface CollapseContentProps extends PropsWithChildren {
	className?: string;
}

function CollapseContent({ className, children, ...props }: CollapseContentProps) {
	const { activeKeys } = useCollapseContext();
	const { value } = useItemContext();

	const [open, setOpen] = useState(false);

	const hasExpanded = activeKeys.includes(value);

	useEffect(() => {
		if (hasExpanded) {
			queueMicrotask(() => {
				setOpen(true);
			});
		} else {
			if (open) {
				setTimeout(() => {
					setOpen(false);
				}, 200);
			}
		}
	}, [hasExpanded, open]);

	return (
		<div
			data-slot="collapse-content"
			className={cn(
				'overflow-hidden font-light has-[[data-slot="collapse-root"]]:pt-2 grid grid-rows-[0fr] transition-[grid-template-rows] duration-200 ease-in-out',
				{
					'grid-rows-[1fr]': hasExpanded
				}
			)}
			{...props}
		>
			{open && <div className={cn('overflow-hidden', className)}>{children}</div>}
		</div>
	);
}

CollapseContent.displayName = 'Collapse.Content';

export default CollapseContent;
