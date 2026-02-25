import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
	'cursor-pointer transition rounded-md inline-flex items-center overflow-hidden disabled:pointer-events-none disabled:opacity-50 hover:bg-[var(--ru-primary-color-9)]',
	{
		variants: {
			variant: {
				default: 'border',
				primary:
					'bg-[var(--ru-primary-color-1)] border-none text-white hover:bg-[var(--ru-primary-color-1)]',
				dashed: 'border border-dashed',
				text: 'bg-transparent border-none',
				link: 'text-[var(--ru-primary-color-1)] underline-offset-4 hover:underline hover:bg-transparent'
			},
			size: {
				large: 'h-10',
				default: 'h-8',
				small: 'h-6 text-sm'
			},
			danger: {
				true: 'text-red-600 border-red-600 hover:bg-red-600/5'
			}
		},
		compoundVariants: [
			{
				danger: true,
				variant: 'primary',
				className: 'text-white bg-red-600 hover:bg-red-600'
			},
			{
				danger: true,
				variant: 'link',
				className: 'hover:bg-transparent'
			}
		],
		defaultVariants: {
			variant: 'default',
			size: 'default',
			danger: false
		}
	}
);
