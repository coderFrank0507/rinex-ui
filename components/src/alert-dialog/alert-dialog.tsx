'use client';

import React, { memo, type PropsWithChildren, useState, useCallback, createContext, useContext } from 'react';
import { cn } from '../_utils';
import type { VariantProps } from 'class-variance-authority';
import { alertDialogVariants } from './variants';

type AlertDialogVariantProps = VariantProps<typeof alertDialogVariants>;

export interface AlertDialogProps extends PropsWithChildren, AlertDialogVariantProps {
	className?: string;
	open?: boolean;
	defaultOpen?: boolean;
	onOpenChange?: (open: boolean) => void;
}

// Context for managing dialog state
interface AlertDialogContextValue {
	open: boolean;
	setOpen: (open: boolean) => void;
}

export const AlertDialogContext = createContext<AlertDialogContextValue | null>(null);

const AlertDialog = memo(({ children, variant, open: controlledOpen, defaultOpen = false, onOpenChange, className }: AlertDialogProps) => {
	const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);

	const isControlled = controlledOpen !== undefined;
	const open = isControlled ? controlledOpen : uncontrolledOpen;

	const setOpen = useCallback((newOpen: boolean) => {
		if (!isControlled) {
			setUncontrolledOpen(newOpen);
		}
		if (onOpenChange) {
			onOpenChange(newOpen);
		}
	}, [isControlled, onOpenChange]);

	const contextValue = React.useMemo(() => ({
		open,
		setOpen
	}), [open, setOpen]);

	return (
		<AlertDialogContext.Provider value={contextValue}>
			<div data-slot="alert-dialog" className={cn(className)}>
				{children}
			</div>
		</AlertDialogContext.Provider>
	);
});

// Hook to use dialog context
export const useAlertDialogContext = () => {
	const context = useContext(AlertDialogContext);
	if (!context) {
		throw new Error('AlertDialog components must be used within AlertDialog');
	}
	return context;
};

AlertDialog.displayName = 'AlertDialog';

export { AlertDialog };