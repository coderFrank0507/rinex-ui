import type { PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { thumbVariants } from './variants';
import { useSwitchContext } from './hooks';

export interface SwitchThumbProps extends PropsWithChildren {
	className?: string;
}

const SwitchThumb = ({ children, className }: SwitchThumbProps) => {
	const { size, checked, disabled } = useSwitchContext();

	return (
		<span
			data-slot="switch-thumb"
			className={cn(thumbVariants({ checked, size, className }), {
				'bg-[var(--ru-disabled-bg-color)]': disabled
			})}
		>
			{children}
		</span>
	);
};

SwitchThumb.displayName = 'Switch.Thumb';

export { SwitchThumb };
