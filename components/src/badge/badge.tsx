import React, { memo, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { badgeContentVariants } from './variants';
import type { VariantProps } from 'class-variance-authority';
import { useConfigContext } from '../_utils/hooks';

type BadgeVariantProps = VariantProps<typeof badgeContentVariants>;

export interface BadgeProps extends PropsWithChildren, BadgeVariantProps {
	className?: string;
	/** Badge 颜色 */
	color?: string;
	/** Badge 显示的值，支持数字和字符串 */
	value?: number;
	/** 最大值，超过最大值时显示 {max}+ */
	max?: number;
	/** 是否显示小红点，当设置为 true 时，不显示数字 */
	showDot?: boolean;
	/** 当数值为 0 时是否显示 Badge */
	showZero?: boolean;
}

const Badge = memo(
	({
		children,
		className,
		value,
		color = '#ff0000',
		max = 99,
		showDot = false,
		showZero = false,
		size,
		...props
	}: BadgeProps) => {
		const { dark } = useConfigContext();

		const isNumberValue = typeof value === 'number';
		const shouldShowBadge = showDot || (value !== undefined && (showZero || value > 0));

		const displayValue = isNumberValue && max && value > max ? `${max}+` : String(value);

		const renderBadgeContent = () => {
			if (!shouldShowBadge) return null;

			return (
				<div
					data-slot="badge-content"
					className={cn(badgeContentVariants({ size }), dark ? 'border-black' : 'border-white')}
					style={{ backgroundColor: color }}
				>
					{showDot ? null : displayValue}
				</div>
			);
		};

		return (
			<div data-slot="badge" className={cn('relative inline-block', className)} {...props}>
				{children}
				{renderBadgeContent()}
			</div>
		);
	}
);

Badge.displayName = 'Badge';

export { Badge };
