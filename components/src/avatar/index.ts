import { Avatar as AvatarComponent, type AvatarProps } from './avatar';
import { AvatarGroup, type AvatarGroupProps } from './avatar-group';

const Avatar = AvatarComponent as typeof AvatarComponent & {
	Group: typeof AvatarGroup;
};

Avatar.Group = AvatarGroup;

export { Avatar, type AvatarProps, type AvatarGroupProps };
