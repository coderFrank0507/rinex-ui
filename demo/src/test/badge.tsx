import { Badge } from 'rinex-ui';

export default function BadgeTest() {
	return (
		<div className="p-8 space-y-8">
			<h1 className="text-2xl font-bold mb-4">Badge 组件测试</h1>

			<section>
				<h2 className="text-lg font-semibold mb-4">基础用法</h2>
				<div className="flex flex-wrap gap-4 items-center">
					<Badge value={5}>
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

			<section>
				<h2 className="text-lg font-semibold mb-4">不同变体</h2>
				<div className="flex flex-wrap gap-4 items-center">
					<Badge value={5}>
						<div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
							默认
						</div>
					</Badge>

					<Badge value={5} color="#000000">
						<div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
							主要
						</div>
					</Badge>

					<Badge value={5} color="#00FF00">
						<div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
							成功
						</div>
					</Badge>

					<Badge value={5} color="#ffa200">
						<div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
							警告
						</div>
					</Badge>

					<Badge value={5} color="#bfbfbf">
						<div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
							信息
						</div>
					</Badge>
				</div>
			</section>

			<section>
				<h2 className="text-lg font-semibold mb-4">不同尺寸</h2>
				<div className="flex flex-wrap gap-4 items-center">
					<Badge value={5} size="sm">
						<div className="size-10 bg-gray-200 rounded flex items-center justify-center text-sm">
							小
						</div>
					</Badge>

					<Badge value={5}>
						<div className="size-10 bg-gray-200 rounded flex items-center justify-center">中</div>
					</Badge>

					<Badge value={5} size="lg">
						<div className="size-10 bg-gray-200 rounded flex items-center justify-center text-lg">
							大
						</div>
					</Badge>
				</div>
			</section>

			<section>
				<h2 className="text-lg font-semibold mb-4">特殊状态</h2>
				<div className="flex flex-wrap gap-4 items-center">
					<Badge value={100} max={99}>
						<div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
							最大值
						</div>
					</Badge>

					<Badge showDot>
						<div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
							小红点
						</div>
					</Badge>

					<Badge value={0} showZero>
						<div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
							显示0
						</div>
					</Badge>
				</div>
			</section>
		</div>
	);
}
