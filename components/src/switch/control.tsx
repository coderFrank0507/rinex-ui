import type { PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { controlVariants } from './variants';
import { useSwitchContext } from './hooks';
import { useConfigContext } from '../_utils/hooks';

export interface SwitchControlProps extends PropsWithChildren {
	className?: string;
}

const SwitchControl = ({ children, className }: SwitchControlProps) => {
	const { checked } = useSwitchContext();
	const { dark } = useConfigContext();

	return (
		<span
			data-slot="switch-control"
			className={cn(controlVariants({ checked, className }), {
				'bg-gray-500': dark
			})}
		>
			{children}
		</span>
	);
};

SwitchControl.displayName = 'Switch.Control';

export { SwitchControl };
