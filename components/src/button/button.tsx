import React, { useMemo, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { buttonVariants } from './variants';
import type { VariantProps } from 'class-variance-authority';
import { useConfigContext } from '../_utils/hooks';

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

interface ButtonProps
	extends PropsWithChildren, ButtonVariantProps, React.ComponentProps<'button'> {
	className?: string;
	danger?: boolean;
}

const Button = ({ children, variant, size, danger, className, ...props }: ButtonProps) => {
	const { size: contextSize } = useConfigContext();

	const buttonSize = useMemo(() => size || contextSize, [size, contextSize]);

	return (
		<button
			data-slot="button"
			data-variant={variant}
			data-size={size}
			className={cn(
				buttonVariants({
					variant,
					danger,
					size: buttonSize,
					className
				})
			)}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
