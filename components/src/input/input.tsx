'use client';

import { forwardRef, useImperativeHandle, useRef } from 'react';
import { inputVariants } from './variants';
import { cn } from '../_utils';
import type { VariantProps } from 'class-variance-authority';
import { resolveOnChange } from './utils';

export type InputVariantProps = VariantProps<typeof inputVariants>;

export interface InputProps
	extends InputVariantProps, Omit<React.ComponentProps<'input'>, 'size' | 'disabled'> {
	className?: string;
	disabled?: boolean;
}

export interface BaseInputRef {
	handleReset: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

interface BaseInputExtend {
	inputRef?: React.Ref<BaseInputRef>;
}

const Input = forwardRef((props: InputProps & BaseInputExtend, ref) => {
	const { className, size, onChange, inputRef: baseInputRef, ...inputProps } = props;

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

	return (
		<input
			tabIndex={inputProps.disabled || inputProps.readOnly ? -1 : 0}
			data-slot="input"
			className={cn(
				inputVariants({ size }),
				{
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
				triggerChange(e, e.target.value);
			}}
			{...inputProps}
		/>
	);
});

Input.displayName = 'Input';

export { Input };
