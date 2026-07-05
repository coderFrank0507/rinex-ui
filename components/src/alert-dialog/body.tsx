'use client';

import React, { memo, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { alertDialogBodyVariants } from './variants';

export interface AlertDialogBodyProps extends PropsWithChildren {
	className?: string;
}

const AlertDialogBody = memo(({ children, className }: AlertDialogBodyProps) => {
	return (
		<div
			data-slot="alert-dialog-body"
			className={cn(alertDialogBodyVariants({ variant: 'default' }), className)}
		>
			{children}
		</div>
	);
});

AlertDialogBody.displayName = 'AlertDialog.Body';

export { AlertDialogBody };