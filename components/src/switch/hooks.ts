import { createContext, useContext } from 'react';
import type { Size } from '../_public/types';

export interface SwitchContextProps {
	checked: boolean;
	size?: Size;
	disabled?: boolean;
}

export const SwitchContext = createContext<SwitchContextProps>({
	checked: false,
	disabled: false
});

export const useSwitchContext = () => useContext(SwitchContext);
