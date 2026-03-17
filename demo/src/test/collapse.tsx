import { useState } from 'react';
import { Collapse } from 'rinex-ui';

const CollapseTest = () => {
	const [values, setValues] = useState(['2']);

	return (
		<div className="w-96 border">
			<Collapse
				single
				// activeKeys={values}
				// onChange={setValues}
			>
				<Collapse.Item value="1">
					<Collapse.Trigger>123</Collapse.Trigger>
					<Collapse.Content>
						Returns accepted within 30 days. Items must be unused and in original packaging. Refunds
						processed within 5-7 business days.
					</Collapse.Content>
				</Collapse.Item>
				<Collapse.Item value="2">
					<Collapse.Trigger>123</Collapse.Trigger>
					<Collapse.Content>
						Returns accepted within 30 days. Items must be unused and in original packaging. Refunds
						processed within 5-7 business days.
					</Collapse.Content>
				</Collapse.Item>
				<Collapse.Item value="3">
					<Collapse.Trigger>123</Collapse.Trigger>
					<Collapse.Content>
						Returns accepted within 30 days. Items must be unused and in original packaging. Refunds
						processed within 5-7 business days.
					</Collapse.Content>
				</Collapse.Item>
			</Collapse>
		</div>
	);
};

export default CollapseTest;
