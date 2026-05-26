import { createContext, useContext } from 'react';
import type { Size } from '../_public/types';

export interface SwitchContextProps {
	checked: boolean;
	size?: Size;
}

// interface SwitchContextValue {
// 	checked: boolean;
// }

export const SwitchContext = createContext<SwitchContextProps>({
	checked: false
});

export const useSwitchContext = () => useContext(SwitchContext);
