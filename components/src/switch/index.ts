import { Switch as Root, type SwitchProps } from './switch';
import { SwitchControl, type SwitchControlProps } from './control';
import { SwitchThumb, type SwitchThumbProps } from './thumb';
import { SwitchContent, type SwitchContentProps } from './content';

const Switch = Root as typeof Root & {
	Control: typeof SwitchControl;
	Thumb: typeof SwitchThumb;
	Content: typeof SwitchContent;
};

Switch.Control = SwitchControl;
Switch.Thumb = SwitchThumb;
Switch.Content = SwitchContent;

export {
	Switch,
	type SwitchProps,
	type SwitchContentProps,
	type SwitchControlProps,
	type SwitchThumbProps
};
