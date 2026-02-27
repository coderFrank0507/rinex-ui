import { useState } from 'react';
import { Input } from 'rinex-ui';
// import { Input } from "antd";

export default function InputTest() {
	const [value, setValue] = useState('');

	return (
		<div className="flex gap-2">
			<Input
				value={value}
				placeholder="Input"
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
		</div>
	);
}
