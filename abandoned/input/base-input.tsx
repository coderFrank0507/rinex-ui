'use client';

import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { baseInputVariants } from './variants';
import { cn } from '../_utils';
import { type VariantProps } from 'class-variance-authority';
import { resolveOnChange } from './utils';

type InputVariantProps = VariantProps<typeof baseInputVariants>;

export interface BaseInputProps
	extends
		Omit<InputVariantProps, 'base' | 'left' | 'right'>,
		Omit<React.ComponentProps<'input'>, 'size' | 'disabled' | 'prefix'> {
	className?: string;
	disabled?: boolean;
}

export interface BaseInputRef {
	handleReset: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface BaseInputExtend {
	baseInputRef?: React.Ref<BaseInputRef>;
	base?: boolean;
	__setHasValue__?: (hasValue: boolean) => void;
	__rightPadding__?: boolean;
}

export const BaseInput = forwardRef((props: BaseInputProps & BaseInputExtend, ref) => {
	const {
		className,
		size,
		onChange,
		baseInputRef,
		base = false,
		__setHasValue__,
		__rightPadding__,
		...inputProps
	} = props;

	const inputRef = useRef<HTMLInputElement>(null);

	const handleReset = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (inputRef.current) {
			inputRef.current.value = '';
			resolveOnChange(inputRef.current, event, onChange);
		}
	};

	const triggerChange = (e: React.ChangeEvent<HTMLInputElement>, currentValue: string) => {
		if (inputRef.current) {
			resolveOnChange(inputRef.current, e, onChange, currentValue);
		}
	};

	useImperativeHandle(baseInputRef, () => ({
		handleReset
	}));

	useEffect(() => {
		if (inputProps.value) __setHasValue__?.(true);
	}, []);

	return (
		<input
			tabIndex={inputProps.disabled || inputProps.readOnly ? -1 : 0}
			data-slot="input"
			className={cn(
				baseInputVariants({ base, size }),
				{
					'pr-2': !__rightPadding__,
					'hover:border-[var(--ru-border-color)]': inputProps.disabled
				},
				className
			)}
			ref={(node) => {
				inputRef.current = node;
				if (typeof ref === 'function') ref(node);
				else if (ref) ref.current = node;
			}}
			onChange={(e) => {
				__setHasValue__?.(Boolean(e.target.value));
				triggerChange(e, e.target.value);
			}}
			{...inputProps}
		/>
	);
});
