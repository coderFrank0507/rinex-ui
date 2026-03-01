import { useState } from 'react';
import { Input, InputSlot } from 'rinex-ui';
// import { Input } from 'antd';
import { User, Search } from 'lucide-react';

export default function InputTest() {
	const [value, setValue] = useState('');

	return (
		<div className="flex flex-col gap-4">
			<Input
				allowClear
				// disabled
				size="lg"
				value={value}
				prefix={
					<InputSlot className="bg-gray-100 mr-2">
						<User />
					</InputSlot>
				}
				suffix={
					<InputSlot className="bg-gray-100">
						<Search />
					</InputSlot>
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
					<InputSlot>
						<User />
					</InputSlot>
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
					<InputSlot>
						<User size={16} />
					</InputSlot>
				}
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
		</div>
	);
}
