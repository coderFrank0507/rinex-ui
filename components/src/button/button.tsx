import React, { useContext, useMemo, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { buttonVariants } from './variants';
import { Context } from '../config-provider';
import type { VariantProps } from 'class-variance-authority';

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

interface ButtonProps
	extends PropsWithChildren, ButtonVariantProps, React.ComponentProps<'button'> {
	className?: string;
	danger?: boolean;
}

function Button({ children, variant, size, danger, className, ...props }: ButtonProps) {
	const { size: contextSize } = useContext(Context);

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
}

export default Button;
