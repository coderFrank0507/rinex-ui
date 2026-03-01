import { Button } from 'rinex-ui';
// import { Button, ConfigProvider } from 'antd';

export default function ButtonTest() {
	return (
		<div className="flex gap-4 flex-wrap">
			<Button
				onClick={() => {
					document.documentElement.classList.remove('dark');
				}}
			>
				Light
			</Button>
			<Button
				onClick={() => {
					document.documentElement.classList.add('dark');
				}}
			>
				Dark
			</Button>
			<Button variant="primary">Button</Button>
			<Button>Button</Button>
			<Button danger>Button</Button>
			<Button danger variant="primary">
				Button
			</Button>
			<Button variant="dashed">Button</Button>
			<Button danger variant="dashed">
				Button
			</Button>
			<Button variant="text">Button</Button>
			<Button danger variant="text">
				Button
			</Button>
			<Button danger variant="link">
				Button
			</Button>
			<Button variant="link">Button</Button>

			<div>Button</div>
		</div>
	);
}
