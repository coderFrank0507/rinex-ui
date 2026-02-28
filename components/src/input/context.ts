import { createContext } from 'react';
import type { BaseInputProps } from './base-input';

export const InputContext = createContext<{
	size: BaseInputProps['size'];
}>({
	size: 'default'
});
