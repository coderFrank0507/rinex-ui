import { useContext, type PropsWithChildren } from 'react';
import { inputPrefixVariants } from './variants';
import { cn } from '../_utils';
import { InputContext } from './context';
import type { VariantProps } from 'class-variance-authority';

type InputPrefixVariantProps = VariantProps<typeof inputPrefixVariants>;

interface InputPrefixOrSuffix extends PropsWithChildren, InputPrefixVariantProps {
	className?: string;
}

export const InputSlot = ({ children, size, className }: InputPrefixOrSuffix) => {
	const context = useContext(InputContext);
	return (
		<div className={cn(inputPrefixVariants({ size: size || context.size, className }))}>
			{children}
		</div>
	);
};
