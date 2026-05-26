import type { PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { inputSlotVariants } from './variants';
import { useConfigContext } from '../_utils/hooks';
import type { Size } from '../_public/types';

export interface InputPrefixProps extends PropsWithChildren {
	className?: string;
	size?: Size;
	__isFirst?: boolean;
}

const InputPrefix = ({ children, className, size, __isFirst }: InputPrefixProps) => {
	const { dark } = useConfigContext();

	return (
		<div
			className={cn(
				inputSlotVariants({ size }),
				{
					'text-white': dark
				},
				className
			)}
		>
			{children}
		</div>
	);
};

InputPrefix.displayName = 'InputPrefix';

export { InputPrefix };
