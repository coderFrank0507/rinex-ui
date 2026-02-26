import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
	'cursor-pointer transition rounded-lg inline-flex gap-2 justify-center items-center overflow-hidden disabled:pointer-events-none disabled:opacity-50 hover:bg-[var(--ru-primary-color-9)]',
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
				large: 'h-10 px-4',
				default: 'h-8 px-3',
				small: 'h-6 px-2 text-sm'
			},
			danger: {
				true: 'text-red-500 border-red-500 hover:bg-red-600/5'
			},
			onlyIcon: {
				true: 'min-w-8 p-0'
			}
		},
		compoundVariants: [
			{
				danger: true,
				variant: 'primary',
				className: 'text-white bg-red-500 hover:bg-red-500'
			},
			{
				danger: true,
				variant: 'link',
				className: 'hover:bg-transparent'
			},
			{
				onlyIcon: true,
				size: 'small',
				className: 'min-w-6'
			},
			{
				onlyIcon: true,
				size: 'large',
				className: 'min-w-10'
			}
		],
		defaultVariants: {
			variant: 'default',
			size: 'default',
			danger: false,
			onlyIcon: false
		}
	}
);
