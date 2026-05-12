import React, { memo, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { buttonVariants } from './variants';
import type { VariantProps } from 'class-variance-authority';
import { useConfigContext } from '../_utils/hooks';

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export interface ButtonProps
	extends PropsWithChildren, ButtonVariantProps, React.ComponentProps<'button'> {
	className?: string;
	danger?: boolean;
}

const Button = memo(({ children, variant, size, danger, className, ...props }: ButtonProps) => {
	const context = useConfigContext();

	return (
		<button
			tabIndex={-1}
			data-slot="button"
			data-variant={variant}
			data-size={size}
			className={cn(
				buttonVariants({
					variant,
					danger,
					size: size || context.size,
					className
				})
			)}
			{...props}
		>
			{children}
		</button>
	);
});

Button.displayName = 'Button';

export { Button };
