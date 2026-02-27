import { forwardRef, useRef, useState } from 'react';
import { inputVariants } from './variants';
import CloseIcon from '../_public/icon/close';
import { resolveOnChange } from './utils';
import { cn } from '../_utils';

interface InputProps extends React.ComponentProps<'input'> {
	className?: string;
}

const Input = forwardRef(({ className, onChange, ...props }: InputProps, ref) => {
	const [value, setValue] = useState('');
	const inputRef = useRef<HTMLInputElement>(null);

	const handleReset = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setValue('');
		if (inputRef.current) {
			inputRef.current.value = '';
			resolveOnChange(inputRef.current, event, onChange);
		}
	};

	const triggerChange = (e: React.ChangeEvent<HTMLInputElement>, currentValue: string) => {
		setValue(currentValue);

		if (inputRef.current) {
			resolveOnChange(inputRef.current, e, onChange, currentValue);
		}
	};

	const clearIcon = value && (
		<button type="button" tabIndex={-1} onClick={handleReset}>
			<CloseIcon className="cursor-pointer size-4" />
		</button>
	);

	return (
		<div tabIndex={0} data-slot="input" className={cn(inputVariants({ className }))}>
			<input
				data-slot="input-dom"
				className="size-full bg-transparent outline-none"
				ref={(node) => {
					inputRef.current = node;
					if (typeof ref === 'function') ref(node);
					else if (ref) ref.current = node;
				}}
				{...props}
				onChange={(e) => triggerChange(e, e.target.value)}
			/>
			{clearIcon}
		</div>
	);
});

export default Input;
