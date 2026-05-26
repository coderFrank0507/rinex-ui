import { cva } from 'class-variance-authority';

export const switchVariants = cva(
	'inline-flex items-center cursor-pointer rounded-full overflow-hidden',
	{
		variants: {
			size: {
				sm: 'h-4 w-8',
				default: 'h-5 w-10',
				lg: 'h-6 w-12'
			}
		},
		defaultVariants: {
			size: 'default'
		}
	}
);

export const controlVariants = cva(
	'relative size-full flex items-center bg-gray-200 transition-colors duration-200',
	{
		variants: {
			checked: {
				true: 'bg-green-500!',
				false: 'bg-gray-200'
			}
		},
		defaultVariants: {
			checked: false
		}
	}
);

export const thumbVariants = cva(
	'mx-0.5 rounded-full bg-white transition duration-200 origin-center shadow-[0_0_6px_rgba(0,0,0,0.2)]',
	{
		variants: {
			size: {
				sm: 'h-3 w-4',
				default: 'h-4 w-5.5',
				lg: 'h-5 w-7'
			},
			checked: {
				false: 'translate-x-0',
				true: 'translate-x-3.5'
			}
		},
		defaultVariants: {
			size: 'default',
			checked: false
		},
		compoundVariants: [
			{
				checked: true,
				size: 'sm',
				className: 'translate-x-3'
			},
			{
				checked: true,
				size: 'lg',
				className: 'translate-x-4'
			}
		]
	}
);
