'use client';

import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import { inputVariants } from './variants';
import { cn } from '../_utils';
import { X } from 'lucide-react';
import { type BaseInputProps, type BaseInputRef, BaseInput } from './base-input';
import { InputContext } from './context';
import { useConfigContext } from '../_utils/hooks';

export interface InputProps extends BaseInputProps {
	/** 是否允许清除输入内容 */
	allowClear?: boolean;
	/** 输入框前缀 */
	prefix?: React.ReactNode;
	/** 输入框后缀 */
	suffix?: React.ReactNode;
}

const Input = forwardRef((inputProps: InputProps, ref) => {
	const { className, allowClear, prefix, suffix, ...props } = inputProps;
	const context = useConfigContext();

	const [showClearIcon, setShowClearIcon] = useState(false);
	const baseInputRef = useRef<BaseInputRef>(null);

	const [hasValue, setHasValue] = useState(false);

	useEffect(() => {
		if (allowClear) {
			queueMicrotask(() => {
				setShowClearIcon(hasValue);
			});
		}
	}, [allowClear, hasValue]);

	const hasSlot = useMemo(() => Boolean(prefix || suffix), [prefix, suffix]);

	/**
	 * @deprecated
	 */
	if (allowClear || prefix || suffix) {
		const clearIcon = showClearIcon && !props.disabled && !props.readOnly && (
			<div className={cn('px-1 pr-2')}>
				<button
					type="button"
					tabIndex={-1}
					className="size-3"
					onClick={(e) => {
						setHasValue(false);
						baseInputRef.current?.handleReset(e);
					}}
				>
					<X className="cursor-pointer size-full opacity-50" />
				</button>
			</div>
		);

		return (
			<InputContext.Provider value={{ size: props.size }}>
				<div
					tabIndex={-1}
					data-slot="input"
					className={cn(
						inputVariants({
							size: props.size || context.size,
							disabled: props.disabled
						}),
						{
							'hover:border-[var(--ru-border-color)]': props.disabled,
							'pl-2': !hasSlot
						},
						className
					)}
				>
					{prefix}
					<BaseInput
						ref={ref}
						baseInputRef={baseInputRef}
						__setHasValue__={setHasValue}
						__rightPadding__={Boolean(suffix || clearIcon)}
						{...props}
					/>
					{clearIcon}
					{suffix}
				</div>
			</InputContext.Provider>
		);
	}

	return (
		<BaseInput base ref={ref} baseInputRef={baseInputRef} className={className || ''} {...props} />
	);
});

Input.displayName = 'Input';

export { Input };
