'use client';

import React, { memo, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { alertDialogDialogVariants } from './variants';
import { useAlertDialogContext } from './alert-dialog';

export interface AlertDialogDialogProps extends PropsWithChildren {
	className?: string;
}

const AlertDialogDialog = memo(({ children, className }: AlertDialogDialogProps) => {
	const context = useAlertDialogContext();

	if (!context) {
		throw new Error('AlertDialog.Dialog must be used within AlertDialog');
	}

	const { open } = context;

	return (
		<div
			data-slot="alert-dialog-dialog"
			role="dialog"
			aria-modal="true"
			className={cn(
				alertDialogDialogVariants({
					variant: 'default',
					state: open ? 'entered' : 'enter'
				}),
				className
			)}
		>
			{children}
		</div>
	);
});

AlertDialogDialog.displayName = 'AlertDialog.Dialog';

export { AlertDialogDialog };