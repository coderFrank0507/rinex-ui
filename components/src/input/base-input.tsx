'use client';

import { forwardRef, useImperativeHandle, useRef } from 'react';
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
}

export const BaseInput = forwardRef((props: BaseInputProps & BaseInputExtend, ref) => {
	const { className, size, onChange, baseInputRef, base = false, ...inputProps } = props;
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
			tabIndex={props.disabled || props.readOnly ? -1 : 0}
			data-slot="input"
			className={cn(baseInputVariants({ base, size, className }))}
			ref={(node) => {
				inputRef.current = node;
				if (typeof ref === 'function') ref(node);
				else if (ref) ref.current = node;
			}}
			onChange={(e) => triggerChange(e, e.target.value)}
			{...inputProps}
		/>
	);
});
