import type { PropsWithChildren } from 'react';

export interface SwitchContentProps extends PropsWithChildren {
	className?: string;
}

const SwitchContent = ({ children, className }: SwitchContentProps) => {
	return <span data-slot="switch-content">{children}</span>;
};

SwitchContent.displayName = 'Switch.Content';

export { SwitchContent };
