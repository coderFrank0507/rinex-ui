import { Avatar } from 'rinex-ui';

export default function AvatarTest() {
	return (
		<div className="space-x-2">
			<Avatar />
			<Avatar
				src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
				fit="cover"
			/>
			{/* <Avatar
				src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
				fit="cover"
				shape="square"
			/> */}
			<Avatar size={50}>Frank</Avatar>
		</div>
	);
}
