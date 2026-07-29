import { useState } from 'react';
import { Button, ConfigProvider } from 'rinex-ui';
import AvatarTest from './test/avatar';
import BadgeTest from './test/badge';
import ButtonTest from './test/button';
// import ColorTest from './test/color';
import CollapseTest from './test/collapse';
import InputTest from './test/input';
import SwitchTest from './test/switch';
import AlertDialogTest from './test/alert-dialog';

function App() {
	const [color, setColor] = useState('default');
	const [dark, setDark] = useState(false);

	return (
		<div className="h-screen dark:bg-[#282c34] flex justify-end">
			<ConfigProvider primaryColor={color} dark={dark}>
				<div className="p-10 space-y-4">
					<div className="flex gap-4">
						<Button size="sm" onClick={() => setColor('default')}>
							Default
						</Button>
						<Button onClick={() => setColor('green')}>Green</Button>
						<Button size="lg" onClick={() => setColor('violet')}>
							Violet
						</Button>
						<Button
							variant={'primary'}
							onClick={() => {
								document.documentElement.classList.remove('dark');
								setDark(false);
							}}
						>
							Light
						</Button>
						<Button
							variant={'primary'}
							onClick={() => {
								document.documentElement.classList.add('dark');
								setDark(true);
							}}
						>
							Dark
						</Button>
					</div>
					{/* <AvatarTest /> */}
					{/* <AlertDialogTest /> */}
					{/* <BadgeTest /> */}
					{/* <ButtonTest /> */}
					{/* <ColorTest /> */}
					<CollapseTest />
					<InputTest />
					<SwitchTest />
				</div>
			</ConfigProvider>
		</div>
	);
}

export default App;
