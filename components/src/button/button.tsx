import React, { useContext, useMemo, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Context } from '../config-provider';

const buttonVariants = cva(
	'cursor-pointer transition rounded-md inline-flex items-center overflow-hidden disabled:pointer-events-none disabled:opacity-50 hover:bg-blue-600/5 hover:text-blue-600',
	{
		variants: {
			variant: {
				primary: 'bg-blue-600 border-blue-600 text-white hover:bg-blue-600 hover:text-white',
				default: 'border',
				dashed: 'border border-dashed',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline'
			},
			size: {
				sm: 'h-7',
				default: 'h-8',
				lg: 'h-10'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
);

const spanPadding = {
	sm: 'px-2',
	default: 'px-4',
	lg: 'px-6'
};

interface ButtonProps
	extends PropsWithChildren, VariantProps<typeof buttonVariants>, React.ComponentProps<'button'> {
	className?: string;
}

function Button({ children, variant, size, className, ...props }: ButtonProps) {
	const { size: contextSize } = useContext(Context);

	const buttonSize = useMemo(() => size || contextSize, [size, contextSize]);

	return (
		<button className={cn(buttonVariants({ variant, size: buttonSize, className }))} {...props}>
			<span
				className={cn(
					'inline-flex items-center size-full',
					spanPadding[buttonSize || 'default']
					// variant === 'dangerLink' && 'hover:bg-red-500/10'
				)}
			>
				{children}
			</span>
		</button>
	);
}

export default Button;
