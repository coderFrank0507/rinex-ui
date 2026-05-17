import type { Size } from '../_public/types';
import { cn } from '../_utils';
import { inputVariants } from './variants';

export interface InputProps extends Omit<React.ComponentProps<'input'>, 'size' | 'disabled'> {
	className?: string;
	disabled?: boolean;
	size?: Size;
	__isFirst?: boolean;
	__isLast?: boolean;
}

const Input = ({ className, size, __isFirst, __isLast, ...inputProps }: InputProps) => {
	return (
		<input
			className={cn(
				inputVariants({ size }),
				{
					'rounded-l-md': __isFirst,
					'rounded-r-md': __isLast
				},
				className
			)}
			{...inputProps}
		/>
	);
};

Input.displayName = 'Input';

export { Input };
