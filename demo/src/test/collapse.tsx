import { Axe } from 'lucide-react';
import { useState } from 'react';
import { Collapse } from 'rinex-ui';

const list = [
	{
		value: '1',
		title: '123',
		content:
			'Returns accepted within 30 days. Items must be unused and in original packaging. Refunds processed within 5-7 business days.'
	},
	{
		value: '2',
		title: '123',
		content:
			'Returns accepted within 30 days. Items must be unused and in original packaging. Refunds processed within 5-7 business days.'
	},
	{
		value: '3',
		title: '1233',
		content:
			'Returns accepted within 30 days. Items must be unused and in original packaging. Refunds processed within 5-7 business days.'
	}
];

const CollapseTest = () => {
	const [values, setValues] = useState(['2']);

	return (
		<div className="w-96 border">
			<Collapse arrowPlacement="left" activeKeys={values} onChange={setValues}>
				{list.map((item) => (
					<Collapse.Item key={item.value} value={item.value}>
						<Collapse.Trigger triggerIcon={<Axe size={16} />} triggerExtra={'678678'}>
							{item.title}
						</Collapse.Trigger>
						<Collapse.Content>{item.content}</Collapse.Content>
					</Collapse.Item>
				))}
				<Collapse.Item value="4">
					<Collapse.Trigger triggerIcon={<Axe size={16} />} triggerExtra={'678678'}>
						456
					</Collapse.Trigger>
					<Collapse.Content>
						<Collapse arrowPlacement="left" activeKeys={values} onChange={setValues}>
							{list.map((item) => (
								<Collapse.Item key={item.value} value={item.value}>
									<Collapse.Trigger triggerIcon={<Axe size={16} />} triggerExtra={'678678'}>
										{item.title}
									</Collapse.Trigger>
									<Collapse.Content>{item.content}</Collapse.Content>
								</Collapse.Item>
							))}
						</Collapse>
					</Collapse.Content>
				</Collapse.Item>
			</Collapse>
		</div>
	);
};

export default CollapseTest;
