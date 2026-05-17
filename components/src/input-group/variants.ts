import { cva } from 'class-variance-authority';

export const inputGroupVariants = cva('flex justify-between items-center', {
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
});

export const inputVariants = cva(
	'w-full px-2 outline-none placeholder:text-[var(--ru-placeholder-color)] text-[var(--ru-text-color)] disabled:cursor-not-allowed disabled:text-[var(--ru-disabled-color)] border border-[var(--ru-border-color)] focus:border-[var(--ru-primary-color-1)]',
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

export const inputSlotVariants = cva('h-full flex items-center justify-center', {
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
