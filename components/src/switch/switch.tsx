import React, { memo, useState, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { switchVariants } from './variants';
import type { VariantProps } from 'class-variance-authority';
import { useConfigContext } from '../_utils/hooks';
import { SwitchContext, type SwitchContextProps } from './hooks';

type SwitchVariantProps = VariantProps<typeof switchVariants>;

export interface SwitchProps
	extends PropsWithChildren, SwitchVariantProps, Partial<SwitchContextProps> {
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
				{children}
			</label>
		</SwitchContext.Provider>
	);
});

Switch.displayName = 'Switch';

export { Switch };
