'use client';

import React, { memo, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { alertDialogHeaderVariants } from './variants';

export interface AlertDialogHeaderProps extends PropsWithChildren {
	className?: string;
}

const AlertDialogHeader = memo(({ children, className }: AlertDialogHeaderProps) => {
	return (
		<div
			data-slot="alert-dialog-header"
			className={cn(alertDialogHeaderVariants({ variant: 'default' }), className)}
		>
			{children}
		</div>
	);
});

AlertDialogHeader.displayName = 'AlertDialog.Header';

export { AlertDialogHeader };