'use client';

import React, { memo } from 'react';
import { cn } from '../_utils';
import { alertDialogCloseTriggerVariants } from './variants';
import { useAlertDialogContext } from './alert-dialog';

export interface AlertDialogCloseTriggerProps {
	className?: string;
}

const AlertDialogCloseTrigger = memo(({ className }: AlertDialogCloseTriggerProps) => {
	const { setOpen } = useAlertDialogContext();

	const handleClick = () => {
		setOpen(false);
	};

	return (
		<button
			data-slot="alert-dialog-close-trigger"
			className={cn(alertDialogCloseTriggerVariants({ variant: 'default' }), className)}
			onClick={handleClick}
			aria-label="Close dialog"
		>
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 4L4 12M4 4L12 12"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</button>
	);
});

AlertDialogCloseTrigger.displayName = 'AlertDialog.CloseTrigger';

export { AlertDialogCloseTrigger };