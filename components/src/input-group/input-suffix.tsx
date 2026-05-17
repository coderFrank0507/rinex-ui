import type { PropsWithChildren } from 'react';
import { inputSlotVariants } from './variants';
import { cn } from '../_utils';
import { useConfigContext } from '../_utils/hooks';
import type { Size } from '../_public/types';

export interface InputSuffixProps extends PropsWithChildren {
	className?: string;
	size?: Size;
	__isLast?: boolean;
}

const InputSuffix = ({ children, className, size, __isLast }: InputSuffixProps) => {
	const { dark } = useConfigContext();

	return (
		<div
			className={cn(
				inputSlotVariants({ size }),
				'border border-[var(--ru-border-color)] border-l-0',
				{
					'text-white': dark,
					'rounded-r-md': __isLast
				},
				className
			)}
		>
			{children}
		</div>
	);
};

InputSuffix.displayName = 'InputSuffix';

export { InputSuffix };
