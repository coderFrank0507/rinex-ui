import { AlertDialog as Root, type AlertDialogProps } from './alert-dialog';
import { AlertDialogBackdrop, type AlertDialogBackdropProps } from './backdrop';
import { AlertDialogContainer, type AlertDialogContainerProps } from './container';
import { AlertDialogDialog, type AlertDialogDialogProps } from './dialog';
import { AlertDialogCloseTrigger, type AlertDialogCloseTriggerProps } from './close-trigger';
import { AlertDialogHeader, type AlertDialogHeaderProps } from './header';
import { AlertDialogIcon, type AlertDialogIconProps } from './icon';
import { AlertDialogHeading, type AlertDialogHeadingProps } from './heading';
import { AlertDialogBody, type AlertDialogBodyProps } from './body';
import { AlertDialogFooter, type AlertDialogFooterProps } from './footer';

const AlertDialog = Root as typeof Root & {
	Backdrop: typeof AlertDialogBackdrop;
	Container: typeof AlertDialogContainer;
	Dialog: typeof AlertDialogDialog;
	CloseTrigger: typeof AlertDialogCloseTrigger;
	Header: typeof AlertDialogHeader;
	Icon: typeof AlertDialogIcon;
	Heading: typeof AlertDialogHeading;
	Body: typeof AlertDialogBody;
	Footer: typeof AlertDialogFooter;
};

AlertDialog.Backdrop = AlertDialogBackdrop;
AlertDialog.Container = AlertDialogContainer;
AlertDialog.Dialog = AlertDialogDialog;
AlertDialog.CloseTrigger = AlertDialogCloseTrigger;
AlertDialog.Header = AlertDialogHeader;
AlertDialog.Icon = AlertDialogIcon;
AlertDialog.Heading = AlertDialogHeading;
AlertDialog.Body = AlertDialogBody;
AlertDialog.Footer = AlertDialogFooter;

export {
	AlertDialog,
	type AlertDialogProps,
	type AlertDialogBackdropProps,
	type AlertDialogContainerProps,
	type AlertDialogDialogProps,
	type AlertDialogCloseTriggerProps,
	type AlertDialogHeaderProps,
	type AlertDialogIconProps,
	type AlertDialogHeadingProps,
	type AlertDialogBodyProps,
	type AlertDialogFooterProps
};
