'use client';

import React, { memo, type PropsWithChildren, useEffect, useState } from 'react';
import { cn } from '../_utils';
import { alertDialogVariants } from './variants';
import { useAlertDialogContext } from './alert-dialog';

export interface AlertDialogBackdropProps extends PropsWithChildren {
	className?: string;
}

const AlertDialogBackdrop = memo(({ children, className }: AlertDialogBackdropProps) => {
	const { open, setOpen } = useAlertDialogContext();
	const [shouldRender, setShouldRender] = useState(open);
	const [animationState, setAnimationState] = useState<'enter' | 'entered'>('entered');

	useEffect(() => {
		if (open) {
			queueMicrotask(() => setShouldRender(true));
			// 延迟设置动画状态，让元素先渲染
			const timer = setTimeout(() => {
				setAnimationState('entered');
			}, 10);
			return () => clearTimeout(timer);
		} else {
			// 开始退出动画
			queueMicrotask(() => setAnimationState('enter'));
			// 延迟移除元素，等待动画完成
			const timer = setTimeout(() => {
				setShouldRender(false);
			}, 200);
			return () => clearTimeout(timer);
		}
	}, [open]);

	if (!shouldRender) return null;

	const handleBackdropClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			setOpen(false);
		}
	};

	return (
		<div
			data-slot="alert-dialog-backdrop"
			className={cn(alertDialogVariants({ variant: 'default', state: animationState }), className)}
			onClick={handleBackdropClick}
		>
			{children}
		</div>
	);
});

AlertDialogBackdrop.displayName = 'AlertDialog.Backdrop';

export { AlertDialogBackdrop };
