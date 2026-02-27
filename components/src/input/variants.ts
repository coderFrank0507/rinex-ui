import { cva } from 'class-variance-authority';

export const inputVariants = cva(
	'w-full px-2 rounded-lg border hover:border-[var(--ru-primary-color-1)] focus-within:border-[var(--ru-primary-color-1)] focus-within:ring-2 focus-within:ring-[var(--ru-primary-color-7)] flex justify-between items-center',
	{
		variants: {
			size: {
				lg: 'h-10',
				default: 'h-8',
				sm: 'h-6'
			}
		},
		defaultVariants: {
			size: 'default'
		}
	}
);
