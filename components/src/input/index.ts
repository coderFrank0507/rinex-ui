import { Input as InternalInput, type InputProps } from './input';
import { InputSlot } from './input-slot';

type InternalInputType = typeof InternalInput & {
	Slot: typeof InputSlot;
};

const Input = InternalInput as InternalInputType;

Input.Slot = InputSlot;

export { Input, type InputProps };
