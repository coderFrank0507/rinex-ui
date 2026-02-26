import React, { useContext, useMemo, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { buttonVariants } from './variants';
import { Context } from '../config-provider';
import type { VariantProps } from 'class-variance-authority';

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

const spanPadding: Record<NonNullable<ButtonVariantProps['size']>, string> = {
	small: 'px-2',
	default: 'px-4',
	large: 'px-6'
};

interface ButtonProps
	extends PropsWithChildren, ButtonVariantProps, React.ComponentProps<'button'> {
	className?: string;
	danger?: boolean;
}

enum ButtonSize {
	Small = 'small',
	Default = 'default',
	Large = 'large'
}

function Button({ children, variant, size, danger, className, ...props }: ButtonProps) {
	const { size: contextSize } = useContext(Context);

	const buttonSize = useMemo(() => size || contextSize, [size, contextSize]);

	return (
		<button
			className={cn(buttonVariants({ variant, size: buttonSize, danger, className }))}
			{...props}
		>
			<span
				className={cn('inline-flex items-center size-full', spanPadding[buttonSize || 'default'])}
			>
				{children}
			</span>
		</button>
	);
}

export default Button;
