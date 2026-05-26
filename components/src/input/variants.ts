import { cva } from 'class-variance-authority';

export const inputVariants = cva(
	'w-full outline-none placeholder:text-[var(--ru-placeholder-color)] border-[var(--ru-border-color)] text-[var(--ru-text-color)] disabled:cursor-not-allowed disabled:text-[var(--ru-disabled-color)] px-2 rounded-md border focus:border-[var(--ru-primary-color-1)]',
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
