'use client';

import { inputVariants } from './variants';
import { cn } from '../_utils';
import type { VariantProps } from 'class-variance-authority';
import { useConfigContext } from '../_utils/hooks';

export type InputVariantProps = VariantProps<typeof inputVariants>;

export interface InputProps
	extends InputVariantProps, Omit<React.ComponentProps<'input'>, 'size' | 'disabled'> {
	className?: string;
	disabled?: boolean;
}

const Input = ({ className, size, onChange, ...inputProps }: InputProps) => {
	const { dark } = useConfigContext();

	return (
		<input
			tabIndex={inputProps.disabled || inputProps.readOnly ? -1 : 0}
			data-slot="input"
			className={cn(
				inputVariants({ size, dark }),
				{
					'hover:border-[var(--ru-border-color)]': inputProps.disabled
				},
				className
			)}
			onChange={(e) => onChange?.(e)}
			{...inputProps}
		/>
	);
};

Input.displayName = 'Input';

export { Input };
