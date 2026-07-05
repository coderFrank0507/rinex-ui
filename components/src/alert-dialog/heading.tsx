'use client';

import React, { memo, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { alertDialogHeadingVariants } from './variants';

export interface AlertDialogHeadingProps extends PropsWithChildren {
	className?: string;
}

const AlertDialogHeading = memo(({ children, className }: AlertDialogHeadingProps) => {
	return (
		<h2
			data-slot="alert-dialog-heading"
			className={cn(alertDialogHeadingVariants({ variant: 'default' }), className)}
		>
			{children}
		</h2>
	);
});

AlertDialogHeading.displayName = 'AlertDialog.Heading';

export { AlertDialogHeading };