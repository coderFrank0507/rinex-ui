'use client';

import { useContext, useState, type PropsWithChildren } from 'react';
import { cn } from '../_utils';
import { AvatarContext } from './avatar-group';
import { useConfigContext } from '../_utils/hooks';

export interface AvatarProps extends PropsWithChildren {
	className?: string;
	/** 图片地址 */
	src?: string;
	/** 图片缩放模式 */
	fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
	/** 头像大小 */
	size?: number;
	/** 头像形状 */
	shape?: 'circle' | 'square';
	/** 头像失败时的回退内容 */
	fallback?: React.ReactNode;
	/** 图片加载成功时的回调函数 */
	onLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
	/** 图片加载失败时的回调函数 */
	onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

const Avatar = ({
	children,
	className,
	src,
	fit = 'cover',
	size = 40,
	shape = 'circle',
	fallback,
	onLoad,
	onError
}: AvatarProps) => {
	const context = useConfigContext();
	const { group } = useContext(AvatarContext);

	const [isError, setIsError] = useState(false);

	const onImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
		setIsError(true);
		onError?.(e);
	};

	const child = src ? (
		<img
			className="size-full"
			src={src}
			alt="avatar"
			style={{ objectFit: fit }}
			onLoad={onLoad}
			onError={onImageError}
		/>
	) : (
		children
	);

	return (
		<span
			className={cn(
				'align-top inline-flex justify-center items-center rounded-full bg-gray-300 overflow-hidden text-white text-sm leading-none',
				{
					'ring-1': group,
					'ring-black': context.dark,
					'rounded-full': shape === 'circle',
					'rounded-md': shape === 'square'
				},
				className
			)}
			style={{ width: size, height: size }}
		>
			{isError ? fallback : child}
		</span>
	);
};

Avatar.displayName = 'Avatar';

export { Avatar };
