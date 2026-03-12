'use client';

import { forwardRef, useEffect, useRef, useState } from 'react';
import { inputVariants } from './variants';
import { cn } from '../_utils';
import { X } from 'lucide-react';
import { type BaseInputProps, type BaseInputRef, BaseInput } from './base-input';
import { InputContext } from './context';
import { useConfigContext } from '../_utils/hooks';

interface InputProps extends BaseInputProps {
	allowClear?: boolean;
	prefix?: React.ReactNode;
	suffix?: React.ReactNode;
}

const Input = forwardRef((inputProps: InputProps, ref) => {
	const { className, allowClear, prefix, suffix, ...props } = inputProps;
	const context = useConfigContext();

	const [showClearIcon, setShowClearIcon] = useState(false);
	const baseInputRef = useRef<BaseInputRef>(null);

	useEffect(() => {
		if (allowClear) {
			queueMicrotask(() => {
				setShowClearIcon(Boolean(props.value));
			});
		}
	}, [allowClear, props.value]);

	if (allowClear || prefix || suffix) {
		const clearIcon = showClearIcon && !props.disabled && !props.readOnly && (
			<button
				type="button"
				tabIndex={-1}
				className={cn('pl-1', !suffix && 'pr-2')}
				onClick={(e) => baseInputRef.current?.handleReset(e)}
			>
				<X className="cursor-pointer size-4 opacity-50" />
			</button>
		);

		return (
			<InputContext.Provider value={{ size: props.size }}>
				<div
					tabIndex={-1}
					data-slot="input"
					className={cn(
						inputVariants({ size: props.size || context.size, disabled: props.disabled, className })
					)}
				>
					{prefix}
					<BaseInput ref={ref} baseInputRef={baseInputRef} {...props} />
					{clearIcon}
					{suffix}
				</div>
			</InputContext.Provider>
		);
	}

	return <BaseInput base ref={ref} baseInputRef={baseInputRef} {...props} />;
});

export default Input;
