import { useState } from 'react';
import { Input } from 'rinex-ui';
// import { Input } from 'antd';
import { User, Search } from 'lucide-react';

export default function InputTest() {
	const [value, setValue] = useState('abc');

	return (
		<div className="flex flex-col gap-4">
			<Input placeholder="请输入" />
			<Input
				allowClear
				disabled
				size="lg"
				value={value}
				prefix={
					<Input.Slot>
						<User />
					</Input.Slot>
				}
				suffix={
					<Input.Slot className="bg-gray-100 dark:bg-gray-700 ml-2">
						<Search />
					</Input.Slot>
				}
				placeholder="Input"
				onChange={(e) => {
					// console.log(e);
					setValue(e.target.value);
				}}
			/>
			<Input
				value={value}
				allowClear
				readOnly
				prefix={
					<Input.Slot>
						<User />
					</Input.Slot>
				}
				placeholder="Input"
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
			<Input
				value={value}
				placeholder="Input"
				// size="sm"
				prefix={
					<Input.Slot>
						<User size={16} />
					</Input.Slot>
				}
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
		</div>
	);
}
