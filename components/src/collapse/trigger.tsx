import { useMemo, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { ChevronRight } from 'lucide-react';
import { useItemContext, useCollapseContext } from './hooks';

interface CollapseTriggerProps extends PropsWithChildren {
	className?: string;
	/** 自定义触发器图标 */
	triggerIcon?: React.ReactNode;
	/** 自定义触发器额外内容 */
	triggerExtra?: React.ReactNode;
}

function CollapseTrigger({
	className,
	children,
	triggerIcon,
	triggerExtra,
	...props
}: CollapseTriggerProps) {
	const { activeKeys, setActiveKeys, arrowPlacement } = useCollapseContext();
	const { value, disabled } = useItemContext();

	const open = activeKeys.includes(value);

	const TriggerIcon = useMemo(
		() => (
			<div
				data-slot="collapse-trigger-icon"
				className={cn('transition-transform duration-200', { 'rotate-90': open })}
			>
				{triggerIcon || <ChevronRight size={18} />}
			</div>
		),
		[triggerIcon, open]
	);

	return (
		<div
			data-slot="collapse-trigger"
			className={cn(
				'flex justify-between gap-2 items-center cursor-pointer font-normal',
				{
					'text-[var(--ru-disabled-color)]': disabled,
					'cursor-not-allowed': disabled
				},
				className
			)}
			onClick={() => !disabled && setActiveKeys(value)}
			{...props}
		>
			<div className={cn('flex-1 flex items-center gap-2', { 'hover:underline': !disabled })}>
				{arrowPlacement === 'left' && TriggerIcon}
				<span className="flex-1">{children}</span>
				{arrowPlacement === 'right' && TriggerIcon}
			</div>
			{triggerExtra}
		</div>
	);
}

CollapseTrigger.displayName = 'Collapse.Trigger';

export default CollapseTrigger;
