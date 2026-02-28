import { createContext } from 'react';
import type { BaseInputProps } from './base-input';

export const InputContext = createContext<{
	size: BaseInputProps['size'];
	disabled: boolean | undefined;
}>({
	size: 'default',
	disabled: false
});
