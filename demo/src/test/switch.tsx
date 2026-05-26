import React, { useState } from 'react';
import { Switch } from 'rinex-ui';
import { Power, Annoyed } from 'lucide-react';

export default function SwitchTest() {
	const [checked1, setChecked1] = useState(false);
	const [checked2, setChecked2] = useState(true);
	const [checked3, setChecked3] = useState(false);

	return (
		<div className="p-8 space-y-6">
			<h2 className="text-xl font-bold mb-4">Switch 组件测试</h2>
			<div className="space-x-2">
				<Switch size={'sm'} disabled>
					<Switch.Control>
						<Switch.Thumb />
					</Switch.Control>
				</Switch>

				<Switch>
					{(checked) => (
						<Switch.Control className={checked ? 'bg-orange-500!' : ''}>
							<Switch.Thumb>{checked ? <Power size={14} /> : <Annoyed size={14} />}</Switch.Thumb>
						</Switch.Control>
					)}
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
