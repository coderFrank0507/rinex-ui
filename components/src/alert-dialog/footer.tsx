'use client';

import React, { memo, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { alertDialogFooterVariants } from './variants';

export interface AlertDialogFooterProps extends PropsWithChildren {
	className?: string;
}

const AlertDialogFooter = memo(({ children, className }: AlertDialogFooterProps) => {
	return (
		<div
			data-slot="alert-dialog-footer"
			className={cn(alertDialogFooterVariants({ variant: 'default' }), className)}
		>
			{children}
		</div>
	);
});

AlertDialogFooter.displayName = 'AlertDialog.Footer';

export { AlertDialogFooter };