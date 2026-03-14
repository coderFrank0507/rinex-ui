import { Collapse } from 'rinex-ui';

const CollapseTest = () => {
	return (
		<Collapse single className="w-96 border">
			<Collapse.Item value="1">
				<Collapse.Trigger>123</Collapse.Trigger>
				<Collapse.Content>
					Returns accepted within 30 days. Items must be unused and in original packaging. Refunds
					processed within 5-7 business days.
				</Collapse.Content>
			</Collapse.Item>
			<Collapse.Item value="2">
				<Collapse.Trigger>123</Collapse.Trigger>
				<Collapse.Content className="pb-0">
					<Collapse single className="border">
						<Collapse.Item value="1">
							<Collapse.Trigger>123</Collapse.Trigger>
							<Collapse.Content>
								Returns accepted within 30 days. Items must be unused and in original packaging.
								Refunds processed within 5-7 business days.
							</Collapse.Content>
						</Collapse.Item>
						<Collapse.Item value="2">
							<Collapse.Trigger>123</Collapse.Trigger>
							<Collapse.Content>
								Returns accepted within 30 days. Items must be unused and in original packaging.
								Refunds processed within 5-7 business days.
							</Collapse.Content>
						</Collapse.Item>
						<Collapse.Item value="3">
							<Collapse.Trigger>123</Collapse.Trigger>
							<Collapse.Content>
								Returns accepted within 30 days. Items must be unused and in original packaging.
								Refunds processed within 5-7 business days.
							</Collapse.Content>
						</Collapse.Item>
					</Collapse>
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
	);
};

export default CollapseTest;
