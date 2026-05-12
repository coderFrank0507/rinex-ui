import { ArrowBigRightDash, Dog } from 'lucide-react';
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
	}
];

const CollapseTest = () => {
	const [values, setValues] = useState(['2']);

	return (
		<div className="w-96 border">
			<Collapse keepContent arrowPlacement="left">
				{list.map((item) => (
					<Collapse.Item key={item.value} value={item.value}>
						<Collapse.Trigger>{item.title}</Collapse.Trigger>
						<Collapse.Panel>{item.content}</Collapse.Panel>
					</Collapse.Item>
				))}
			</Collapse>
		</div>
	);
};

export default CollapseTest;
