import { cva } from 'class-variance-authority';

export const alertDialogVariants = cva(
	'fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ease-out',
	{
		variants: {
			variant: {
				default: 'bg-black/50 backdrop-blur-sm'
			},
			state: {
				enter: 'opacity-0',
				entered: 'opacity-100'
			}
		},
		defaultVariants: {
			variant: 'default',
			state: 'entered'
		}
	}
);

export const alertDialogContainerVariants = cva('relative w-full max-w-lg mx-4', {
	variants: {
		variant: {
			default: 'scale-100'
		}
	},
	defaultVariants: {
		variant: 'default'
	}
});

export const alertDialogDialogVariants = cva(
	'w-full rounded-lg shadow-lg transition-all duration-200 ease-out',
	{
		variants: {
			variant: {
				default: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
			},
			state: {
				enter: 'opacity-0 translate-y-4 scale-95',
				entered: 'opacity-100 translate-y-0 scale-100'
			}
		},
		defaultVariants: {
			variant: 'default',
			state: 'entered'
		}
	}
);

export const alertDialogHeaderVariants = cva('flex items-center justify-between', {
	variants: {
		variant: {
			default: 'px-6 py-4 border-b border-gray-200 dark:border-gray-700'
		}
	},
	defaultVariants: {
		variant: 'default'
	}
});

export const alertDialogBodyVariants = cva('', {
	variants: {
		variant: {
			default: 'px-6 py-4'
		}
	},
	defaultVariants: {
		variant: 'default'
	}
});

export const alertDialogFooterVariants = cva('flex items-center justify-end gap-2', {
	variants: {
		variant: {
			default: 'px-6 py-4 border-t border-gray-200 dark:border-gray-700'
		}
	},
	defaultVariants: {
		variant: 'default'
	}
});

export const alertDialogIconVariants = cva('flex-shrink-0', {
	variants: {
		type: {
			default: 'w-6 h-6',
			info: 'w-6 h-6 text-blue-500',
			success: 'w-6 h-6 text-green-500',
			warning: 'w-6 h-6 text-yellow-500',
			error: 'w-6 h-6 text-red-500'
		}
	},
	defaultVariants: {
		type: 'default'
	}
});

export const alertDialogHeadingVariants = cva('font-semibold', {
	variants: {
		variant: {
			default: 'text-lg text-gray-900 dark:text-gray-100'
		}
	},
	defaultVariants: {
		variant: 'default'
	}
});

export const alertDialogCloseTriggerVariants = cva('flex items-center justify-center', {
	variants: {
		variant: {
			default: 'p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'
		}
	},
	defaultVariants: {
		variant: 'default'
	}
});
