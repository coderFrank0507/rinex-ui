import React, { useContext, useMemo, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { buttonVariants } from './variants';
import { Context } from '../config-provider';
import type { VariantProps } from 'class-variance-authority';

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

interface ButtonSize {
	large: string;
	default: string;
	small: string;
}

interface ButtonProps
	extends PropsWithChildren, ButtonVariantProps, React.ComponentProps<'button'> {
	className?: string;
	danger?: boolean;
	size?: keyof ButtonSize;
	icon?: React.ReactNode;
}

function Button({ children, variant, size, danger, className, icon, ...props }: ButtonProps) {
	const { size: contextSize } = useContext(Context);

	const buttonSize = useMemo(() => size || contextSize, [size, contextSize]);
	// const contentPadding = useMemo(() => {
	// 	if (icon && !children) {
	// 		return 'size-8 p-0';
	// 	}
	// }, [icon, children]);

	return (
		<button
			className={cn(
				buttonVariants({
					variant,
					danger,
					size: buttonSize,
					onlyIcon: !!(icon && !children),
					className
				})
			)}
			{...props}
		>
			{icon}
			{children}
		</button>
	);
}

export default Button;
