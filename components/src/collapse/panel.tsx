import {
	memo,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
	type PropsWithChildren
} from 'react';
import { useItemContext, useCollapseContext } from './hooks';
import { cn } from '../_utils';

export interface CollapsePanelProps extends PropsWithChildren {
	className?: string;
}

const CollapsePanel = memo(({ className, children, ...props }: CollapsePanelProps) => {
	const { activeKeys, keepContent } = useCollapseContext();
	const { value } = useItemContext();

	const elRef = useRef<HTMLDivElement>(null);
	const [open, setOpen] = useState(false);
	// const [hasRoot, setHasRoot] = useState(false);

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

	const refFn = useCallback(
		(el: HTMLDivElement | null) => {
			if (el && hasExpanded) {
				if (elRef.current) {
					const { current: contentEl } = elRef;

					// console.log('=====', el.clientHeight);
					contentEl.style.height = `${el.clientHeight}px`;
					setTimeout(() => {
						contentEl.style.height = 'auto';
					}, 150);
				}
			}
		},
		[hasExpanded, elRef]
	);

	const child = useMemo(
		() =>
			open && (
				<div ref={refFn} className={cn('pb-2', className)}>
					{children}
				</div>
			),
		[open, children, className, refFn]
	);

	return (
		<div
			data-slot="collapse-content"
			ref={elRef}
			className={
				'h-0 font-light overflow-clip transition-[height,opacity] duration-150 ease-in-out'
			}
			{...props}
		>
			{child}
		</div>
	);
});

CollapsePanel.displayName = 'Collapse.Panel';

export { CollapsePanel };
