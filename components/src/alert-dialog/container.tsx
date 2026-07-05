'use client';

import React, { memo, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { alertDialogContainerVariants } from './variants';

export interface AlertDialogContainerProps extends PropsWithChildren {
	className?: string;
}

const AlertDialogContainer = memo(({ children, className }: AlertDialogContainerProps) => {
	return (
		<div
			data-slot="alert-dialog-container"
			className={cn(alertDialogContainerVariants({ variant: 'default' }), className)}
		>
			{children}
		</div>
	);
});

AlertDialogContainer.displayName = 'AlertDialog.Container';

export { AlertDialogContainer };