import { cva } from 'class-variance-authority';

export const inputGroupVariants = cva(
	'flex justify-between items-center rounded-md border border-[var(--ru-border-color)] focus-within:border-[var(--ru-primary-color-1)]',
	{
		variants: {
			size: {
				lg: 'h-10 text-lg',
				default: 'h-8',
				sm: 'h-6 text-sm'
			}
		},
		defaultVariants: {
			size: 'default'
		}
	}
);

export const inputVariants = cva(
	'w-full outline-none placeholder:text-[var(--ru-placeholder-color)] text-[var(--ru-text-color)] disabled:cursor-not-allowed disabled:text-[var(--ru-disabled-color)]',
	{
		variants: {
			size: {
				lg: 'h-10 text-lg',
				default: 'h-8',
				sm: 'h-6 text-sm'
			}
		},
		defaultVariants: {
			size: 'default'
		}
	}
);

export const inputSlotVariants = cva('h-full flex shrink-0 items-center justify-center', {
	variants: {
		size: {
			lg: 'min-w-10 w-fit',
			default: 'min-w-8 w-fit',
			sm: 'min-w-6 text-sm w-fit'
		}
	},
	defaultVariants: {
		size: 'default'
	}
});
