import { useContext, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { ChevronRight } from 'lucide-react';
import { CollapseContext, ItemContext } from './context';

interface CollapseTriggerProps extends PropsWithChildren {
	className?: string;
}

function CollapseTrigger({ className, children, ...props }: CollapseTriggerProps) {
	const { activeKeys, toggle } = useContext(CollapseContext);
	const { value } = useContext(ItemContext);

	const open = activeKeys.includes(value);

	return (
		<div
			data-slot="collapse-trigger"
			className={cn(
				'flex justify-between gap-2 py-2 items-center cursor-pointer hover:underline',
				className
			)}
			onClick={() => toggle(value)}
			{...props}
		>
			<ChevronRight
				data-slot="collapse-trigger-icon"
				size={18}
				className={cn('transition-transform duration-200', { 'rotate-90': open })}
			/>
			<span className="flex-1">{children}</span>
		</div>
	);
}

CollapseTrigger.displayName = 'Collapse.Trigger';

export default CollapseTrigger;
