import { cva } from 'class-variance-authority';

export const baseInputVariants = cva(
	'w-full outline-none placeholder:text-[var(--ru-placeholder-color)] border-[var(--ru-border-color)] text-[var(--ru-text-color)] transition disabled:cursor-not-allowed disabled:text-[var(--ru-disabled-color)]',
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
	'w-full border relative rounded-md overflow-hidden flex justify-between items-center transition hover:border-[var(--ru-primary-color-1)] focus-within:border-[var(--ru-primary-color-1)] focus-within:ring-2 focus-within:ring-[var(--ru-primary-color-8)] border-[var(--ru-border-color)] text-[var(--ru-text-color)]',
	{
		variants: {
			size: {
				lg: 'h-10 text-lg',
				default: 'h-8',
				sm: 'h-6 text-sm'
			},
			disabled: {
				true: 'hover:border-inherit focus-within:border-[var(--ru-border-color)] focus-within:ring-0 cursor-not-allowed text-[var(--ru-disabled-color)]'
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
