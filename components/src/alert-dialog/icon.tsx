'use client';

import React, { memo } from 'react';
import { cn } from '../_utils';
import { alertDialogIconVariants } from './variants';

export interface AlertDialogIconProps {
	className?: string;
	type?: 'info' | 'success' | 'warning' | 'error' | 'default';
}

const AlertDialogIcon = memo(({ className, type = 'default' }: AlertDialogIconProps) => {
	const getIcon = () => {
		switch (type) {
			case 'info':
				return (
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
						<path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
						<path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
					</svg>
				);
			case 'success':
				return (
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						<path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				);
			case 'warning':
				return (
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						<line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
						<line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
					</svg>
				);
			case 'error':
				return (
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
						<line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
						<line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
					</svg>
				);
			default:
				return (
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
						<path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
						<path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
					</svg>
				);
		}
	};

	return (
		<div
			data-slot="alert-dialog-icon"
			className={cn(alertDialogIconVariants({ type }), className)}
		>
			{getIcon()}
		</div>
	);
});

AlertDialogIcon.displayName = 'AlertDialog.Icon';

export { AlertDialogIcon };