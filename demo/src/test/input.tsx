import { useState } from 'react';
import { Input } from 'rinex-ui';
// import { Input } from "antd";
import { User, Search } from 'lucide-react';

export default function InputTest() {
	const [value, setValue] = useState('');

	return (
		<div className="flex flex-col gap-4">
			<Input
				allowClear
				disabled
				value={value}
				prefix={<User />}
				suffix={<Search />}
				placeholder="Input"
				size="lg"
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
			<Input
				value={value}
				allowClear
				readOnly
				prefix={<User />}
				placeholder="Input"
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
			<Input
				value={value}
				placeholder="Input"
				size="sm"
				prefix={<User size={16} />}
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
		</div>
	);
}
