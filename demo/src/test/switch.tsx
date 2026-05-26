import React, { useState } from 'react';
import { Switch } from 'rinex-ui';

export default function SwitchTest() {
	const [checked1, setChecked1] = useState(false);
	const [checked2, setChecked2] = useState(true);
	const [checked3, setChecked3] = useState(false);

	return (
		<div className="p-8 space-y-6">
			<h2 className="text-xl font-bold mb-4">Switch 组件测试</h2>
			<div className="space-x-2">
				<Switch size={'sm'}>
					<Switch.Control>
						<Switch.Thumb />
					</Switch.Control>
				</Switch>

				<Switch>
					<Switch.Control>
						<Switch.Thumb />
					</Switch.Control>
				</Switch>

				<Switch size={'lg'}>
					<Switch.Control>
						<Switch.Thumb />
					</Switch.Control>
				</Switch>
			</div>
		</div>
	);
}
