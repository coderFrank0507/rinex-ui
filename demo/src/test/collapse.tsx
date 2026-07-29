import { ArrowBigRightDash, Dog } from 'lucide-react';
import { useState } from 'react';
import { Collapse } from 'rinex-ui';

const list = [
	{
		id: '1',
		title: 'How do i place an order?',
		content:
			"Browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your purchase."
	},
	{
		id: '2',
		title: 'Can i modify or cancel my order?',
		content:
			"Yes, you can modify or cancel your order before it's shipped. Once your order is processed, you can't make changes."
	},
	{
		id: '3',
		title: 'What payment methods do you accept?',
		content: 'We accept all major credit cards, including Visa, Mastercard, and American Express.'
	},
	{
		id: '4',
		title: 'How much does shipping cost?',
		content:
			'Shipping costs vary based on your location and the size of your order. We offer free shipping for orders over $50.'
	}
];

const CollapseTest = () => {
	const [values, setValues] = useState(['2']);

	return (
		<div className="w-96 border">
			<Collapse keepContent accordion>
				{list.map((item) => (
					<Collapse.Item key={item.id} value={item.id}>
						<Collapse.Trigger>{item.title}</Collapse.Trigger>
						<Collapse.Panel>{item.content}</Collapse.Panel>
					</Collapse.Item>
				))}
				<Collapse.Item key="5" value="5">
					<Collapse.Trigger>What is your return policy?</Collapse.Trigger>
					<Collapse.Panel>
						<Collapse keepContent accordion>
							{list.map((item) => (
								<Collapse.Item key={item.id} value={item.id}>
									<Collapse.Trigger>{item.title}</Collapse.Trigger>
									<Collapse.Panel>{item.content}</Collapse.Panel>
								</Collapse.Item>
							))}
						</Collapse>
					</Collapse.Panel>
				</Collapse.Item>
			</Collapse>
		</div>
	);
};

export default CollapseTest;
