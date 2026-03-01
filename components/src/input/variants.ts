import { cva } from 'class-variance-authority';

export const baseInputVariants = cva(
	'w-full outline-none placeholder:text-gray-400 dark:text-zinc-100 disabled:bg-transparent transition disabled:cursor-not-allowed border-gray-300 dark:placeholder:text-gray-500 dark:focus:border-[var(--ru-primary-color-1)]',
	{
		variants: {
			size: {
				lg: 'h-full text-lg',
				default: 'h-8',
				sm: 'h-6 text-sm'
			},
			base: {
				true: 'px-2 rounded-md border hover:border-[var(--ru-primary-color-1)] focus:border-[var(--ru-primary-color-1)] focus:ring-2 focus:ring-[var(--ru-primary-color-8)]'
			}
		},
		defaultVariants: {
			size: 'default'
		}
	}
);

export const inputVariants = cva(
	'w-full border rounded-md overflow-hidden flex justify-between items-center transition hover:border-[var(--ru-primary-color-1)] focus-within:border-[var(--ru-primary-color-1)] focus-within:ring-2 focus-within:ring-[var(--ru-primary-color-8)] border-gray-300 dark:text-zinc-100',
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
