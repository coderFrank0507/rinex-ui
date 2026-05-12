import { createContext, type PropsWithChildren } from 'react';
import { cn } from '../_utils';

export const AvatarContext = createContext<{ group: boolean }>({ group: false });

export interface AvatarGroupProps extends PropsWithChildren {
	className?: string;
}

const AvatarGroup = ({ children, className }: AvatarGroupProps) => {
	return (
		<AvatarContext.Provider value={{ group: true }}>
			<div className={cn('flex [&>*:not(:first-child)]:-ml-2', className)}>{children}</div>
		</AvatarContext.Provider>
	);
};

AvatarGroup.displayName = 'AvatarGroup';

export { AvatarGroup };
