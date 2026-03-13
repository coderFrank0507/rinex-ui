import { useContext, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { ChevronRight } from 'lucide-react';
import { CollapseContext, ItemContext } from './context';

interface CollapseTriggerProps extends PropsWithChildren {
	className?: string;
}

function CollapseTrigger({ className, children, ...props }: CollapseTriggerProps) {
	const { expandedItems, setExpandedItems, single } = useContext(CollapseContext);
	const { value } = useContext(ItemContext);

	const handleTriggerClick = () => {
		if (single) {
			setExpandedItems(value === expandedItems[0] ? [] : [value]);
		} else {
			const index = expandedItems.findIndex((item) => item === value);
			if (index === -1) {
				setExpandedItems([...expandedItems, value]);
			} else {
				setExpandedItems(expandedItems.filter((item) => item !== value));
			}
		}
	};

	const open = expandedItems.includes(value);

	return (
		<div
			data-slot="collapse-trigger"
			className={cn(
				'flex justify-between gap-2 items-center cursor-pointer py-2 hover:underline',
				className
			)}
			onClick={handleTriggerClick}
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
