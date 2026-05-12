'use client';

import { type PropsWithChildren } from 'react';
import { cn } from '../_utils';

export interface AvatarProps extends PropsWithChildren {
	className?: string;
	src?: string;
	fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
	size?: number;
	shape?: 'circle' | 'square';
	onLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
	onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

const Avatar = ({
	children,
	className,
	src,
	fit = 'cover',
	size = 40,
	shape = 'circle',
	onLoad,
	onError
}: AvatarProps) => {
	return (
		<span
			className={cn(
				'align-top inline-flex justify-center items-center rounded-full bg-gray-300 overflow-hidden text-white text-sm leading-none',
				{
					'rounded-full': shape === 'circle',
					'rounded-md': shape === 'square'
				},
				className
			)}
			style={{ width: size, height: size }}
		>
			{src ? (
				<img
					className="size-full"
					src={src}
					alt="avatar"
					style={{ objectFit: fit }}
					onLoad={onLoad}
					onError={onError}
				/>
			) : (
				children
			)}
		</span>
	);
};

Avatar.displayName = 'Avatar';

export { Avatar };
