import { InputGroup as InternalInputGroup, type InputGroupProps } from './input-group';
import { Input, type InputProps } from './input';
import { InputPrefix, type InputPrefixProps } from './input-prefix';
import { InputSuffix, type InputSuffixProps } from './input-suffix';
import type React from 'react';

type PublicInputProps = Omit<InputProps, '__isFirst' | '__isLast'>;
type PublicPrefixProps = Omit<InputPrefixProps, '__isFirst' | 'size'>;
type PublicSuffixProps = Omit<InputSuffixProps, '__isLast' | 'size'>;

const InputGroup = InternalInputGroup as typeof InternalInputGroup & {
	Input: React.FC<PublicInputProps>;
	Prefix: React.FC<PublicPrefixProps>;
	Suffix: React.FC<PublicSuffixProps>;
};

InputGroup.Input = Input;
InputGroup.Prefix = InputPrefix;
InputGroup.Suffix = InputSuffix;

export { InputGroup, type InputGroupProps };
