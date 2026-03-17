import { useContext, useLayoutEffect, useRef, useState, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { CollapseContext, ItemContext } from './context';

interface CollapseContentProps extends PropsWithChildren {
	className?: string;
}

function CollapseContent({ className, children, ...props }: CollapseContentProps) {
	const { activeKeys, level } = useContext(CollapseContext);
	const { value } = useContext(ItemContext);

	const [open, setOpen] = useState(false);

	const hasExpanded = activeKeys.includes(value);

	useLayoutEffect(() => {
		if (hasExpanded) {
			queueMicrotask(() => {
				setOpen(true);
			});
		} else {
			if (open) {
				setTimeout(() => {
					setOpen(false);
				}, 300);
			}
		}
	}, [hasExpanded, open]);

	return (
		<div
			data-slot="collapse-content"
			className={cn(
				'overflow-hidden font-light grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out',
				{
					'grid-rows-[1fr]': hasExpanded
				}
			)}
			{...props}
		>
			<div className="overflow-hidden">
				{open && (
					<div className={cn('pb-2 has-[[data-slot="collapse-root"]]:pb-0', className)}>
						{children}
					</div>
				)}
			</div>
		</div>
	);
}

CollapseContent.displayName = 'Collapse.Content';

export default CollapseContent;
