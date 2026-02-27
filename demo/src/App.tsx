import { useState } from 'react';
import { Button, ConfigProvider } from 'rinex-ui';
import ButtonTest from './test/button';
import InputTest from './test/input';

function App() {
	const [color, setColor] = useState('green');

	return (
		<ConfigProvider primaryColor={color}>
			<div className="p-10 space-y-2">
				<div className="flex gap-2 mb-2">
					<Button onClick={() => setColor('blue')}>Blue</Button>
					<Button onClick={() => setColor('green')}>Green</Button>
					<Button onClick={() => setColor('neutral')}>Neutral</Button>
				</div>
				<ButtonTest />
				<InputTest />
			</div>
		</ConfigProvider>
	);
}

export default App;
