import React, { memo, useState } from 'react';
import { cn } from '../_utils';
import { switchVariants } from './variants';
import { SwitchContext, type SwitchContextProps } from './hooks';
import type { VariantProps } from 'class-variance-authority';

type SwitchVariantProps = VariantProps<typeof switchVariants>;

export interface SwitchProps extends SwitchVariantProps, Partial<SwitchContextProps> {
	children?: React.ReactNode | ((checked: boolean) => React.ReactNode);
	className?: string;
	onChange?: (checked: boolean) => void;
}

const Switch = memo(({ children, className, size, checked = false, onChange }: SwitchProps) => {
	const [checkedState, setCheckedState] = useState(checked);

	const onLabelChange = () => {
		setCheckedState(!checkedState);
		onChange?.(!checkedState);
	};

	return (
		<SwitchContext.Provider value={{ checked: checkedState, size }}>
			<label className={cn(switchVariants({ size, className }))} onClick={() => onLabelChange()}>
				{typeof children === 'function' ? children(checkedState) : children}
			</label>
		</SwitchContext.Provider>
	);
});

Switch.displayName = 'Switch';

export { Switch };
