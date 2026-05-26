import { useState } from 'react';
import { Badge, Button } from 'rinex-ui';

export default function BadgeTest() {
	const [value, setValue] = useState(5);

	return (
		<div className="p-8 space-y-8">
			<h1 className="text-2xl font-bold mb-4">Badge 组件测试</h1>

			<section>
				<h2 className="text-lg font-semibold mb-4">基础用法</h2>
				<div className="mb-4">
					<Button onClick={() => setValue(value + 1)}>click + 1</Button>
					<Button onClick={() => setValue(value - 1)}>click - 1</Button>
				</div>
				<div className="flex flex-wrap gap-4 items-center">
					<Badge value={value}>
						<div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
							消息
						</div>
					</Badge>

					<Badge value={10}>
						<div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
							通知
						</div>
					</Badge>

					<Badge value={99}>
						<div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
							邮件
						</div>
					</Badge>
				</div>
			</section>
		</div>
	);
}
