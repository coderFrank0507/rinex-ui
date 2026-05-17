import {
	Children,
	cloneElement,
	isValidElement,
	type PropsWithChildren,
	type ReactElement
} from 'react';
import { cn } from '../_utils';
import { inputGroupVariants } from './variants';
import { InputPrefix, type InputPrefixProps } from './input-prefix';
import { InputSuffix, type InputSuffixProps } from './input-suffix';
import type { InputProps } from './input';
import type { VariantProps } from 'class-variance-authority';

export type InputGroupVariants = VariantProps<typeof inputGroupVariants>;

export interface InputGroupProps extends InputGroupVariants, PropsWithChildren {
	className?: string;
}
const InputGroup = ({ children, className, size }: InputGroupProps) => {
	const items = Children.toArray(children);

	return (
		<div className={cn(inputGroupVariants({ size }), className)}>
			{items.map((child, index) => {
				if (!isValidElement(child)) {
					return child;
				}

				if (child.type === InputPrefix) {
					return cloneElement(child as ReactElement<InputPrefixProps>, {
						size,
						__isFirst: index === 0
					});
				}

				if (child.type === InputSuffix) {
					return cloneElement(child as ReactElement<InputSuffixProps>, {
						size,
						__isLast: index === items.length - 1
					});
				}

				return cloneElement(child as ReactElement<InputProps>, {
					size,
					__isFirst: index === 0,
					__isLast: index === items.length - 1
				});
			})}
		</div>
	);
};

InputGroup.displayName = 'InputGroup';

export { InputGroup };
