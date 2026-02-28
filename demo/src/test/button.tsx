import { Button } from 'rinex-ui';

export default function ButtonTest() {
	return (
		<div className="flex gap-2">
			<Button size={'lg'} variant={'primary'}>
				Button
			</Button>
			<Button>Button</Button>
			<Button size="sm">Button</Button>
		</div>
	);
}
