import { cva } from 'class-variance-authority';

export const badgeContentVariants = cva(
	'absolute -top-2 -right-2 min-w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium px-1 text-white',
	{
		variants: {
			size: {
				sm: 'min-w-4 h-4 text-xs px-0.5',
				default: 'min-w-5 h-5 text-xs px-1',
				lg: 'min-w-6 h-6 text-sm px-1.5'
			}
		},
		defaultVariants: {
			size: 'default'
		}
	}
);
