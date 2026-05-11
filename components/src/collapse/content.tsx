import { useEffect, useRef, useState, type PropsWithChildren } from 'react';
import { useItemContext, useCollapseContext } from './hooks';

interface CollapseContentProps extends PropsWithChildren {
	className?: string;
}

function CollapseContent({ className, children, ...props }: CollapseContentProps) {
	const { activeKeys, keepContent } = useCollapseContext();
	const { value } = useItemContext();

	const elRef = useRef<HTMLDivElement>(null);
	const [open, setOpen] = useState(false);

	const hasExpanded = activeKeys.includes(value);

	useEffect(() => {
		if (hasExpanded) {
			queueMicrotask(() => {
				setOpen(true);
			});
		} else {
			if (elRef.current) {
				elRef.current.style.height = `${elRef.current.clientHeight}px`;
				elRef.current.offsetHeight;
				elRef.current.style.height = '0px';
			}

			if (!keepContent) {
				setTimeout(() => {
					setOpen(false);
				}, 150);
			}
		}
	}, [hasExpanded, keepContent]);

	const refFn = (el: HTMLDivElement | null) => {
		if (el && hasExpanded) {
			if (elRef.current) {
				const { current: contentEl } = elRef;
				contentEl.style.height = `${el.clientHeight}px`;
				setTimeout(() => {
					contentEl.style.height = 'auto';
				}, 150);
			}
		}
	};

	return (
		<div
			data-slot="collapse-content"
			ref={elRef}
			className={'h-0 overflow-clip transition-[height,opacity] duration-150 ease-in-out'}
			{...props}
		>
			{open && (
				<div ref={refFn} className={className}>
					{children}
				</div>
			)}
		</div>
	);
}

CollapseContent.displayName = 'Collapse.Content';

export default CollapseContent;
