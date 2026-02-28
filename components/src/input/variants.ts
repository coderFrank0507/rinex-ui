import { cva } from 'class-variance-authority';

export const baseInputVariants = cva('w-full outline-none', {
	variants: {
		size: {
			lg: 'h-full text-lg',
			default: 'h-8',
			sm: 'h-6 text-sm'
		},
		base: {
			true: 'px-2 rounded-lg border hover:border-[var(--ru-primary-color-1)] focus:border-[var(--ru-primary-color-1)] focus:ring-2 focus:ring-[var(--ru-primary-color-7)]'
		},
		disabled: {
			true: 'hover:border-inherit focus:border-inherit focus:ring-0 text-gray-400 cursor-not-allowed'
		}
	},
	defaultVariants: {
		size: 'default'
	}
});

export const inputVariants = cva(
	'w-full border rounded-lg overflow-hidden flex justify-between items-center hover:border-[var(--ru-primary-color-1)] focus-within:border-[var(--ru-primary-color-1)] focus-within:ring-2 focus-within:ring-[var(--ru-primary-color-7)]',
	{
		variants: {
			size: {
				lg: 'h-10 text-lg',
				default: 'h-8',
				sm: 'h-6 text-sm'
			},
			disabled: {
				true: 'hover:border-inherit focus-within:border-inherit focus-within:ring-0 text-gray-400 cursor-not-allowed'
			}
		},
		defaultVariants: {
			size: 'default'
		}
	}
);

export const inputPrefixVariants = cva('h-full flex items-center justify-center', {
	variants: {
		size: {
			lg: 'min-w-10',
			default: 'min-w-8',
			sm: 'min-w-6 text-sm'
		}
	},
	defaultVariants: {
		size: 'default'
	}
});
