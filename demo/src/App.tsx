import { useState } from 'react';
import { Button, ConfigProvider } from 'rinex-ui';
import ButtonTest from './test/button';
import InputTest from './test/input';
// import ColorTest from './test/color';
import CollapseTest from './test/collapse';

function App() {
	const [color, setColor] = useState('green');
	const [dark, setDark] = useState(false);

	return (
		<div className="h-full dark:bg-[#282c34]">
			<ConfigProvider primaryColor={color} dark={dark}>
				<div className="p-10 space-y-4">
					<div className="flex gap-4">
						<Button onClick={() => setColor('blue')}>Blue</Button>
						<Button onClick={() => setColor('green')}>Green</Button>
						<Button onClick={() => setColor('violet')}>Violet</Button>
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
					{/* <ButtonTest /> */}
					{/* <InputTest /> */}
					{/* <ColorTest /> */}
					<CollapseTest />
				</div>
			</ConfigProvider>
		</div>
	);
}

export default App;
