import { useState } from 'react';
import { Button, ConfigProvider } from 'rinex-ui';
import ButtonTest from './test/button';
import InputTest from './test/input';
import ColorTest from './test/color';

function App() {
	const [color, setColor] = useState('green');

	return (
		<ConfigProvider primaryColor={color}>
			<div className="p-10 space-y-4">
				<div className="flex gap-4 mb-4">
					<Button onClick={() => setColor('blue')}>Blue</Button>
					<Button onClick={() => setColor('green')}>Green</Button>
					<Button onClick={() => setColor('neutral')}>Neutral</Button>
				</div>
				<ButtonTest />
				<InputTest />
				<ColorTest />
			</div>
		</ConfigProvider>
	);
}

export default App;
