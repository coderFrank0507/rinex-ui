import { useState } from 'react';
import { Input, InputGroup } from 'rinex-ui';
// import { Input } from 'antd';
import { User, Search } from 'lucide-react';

export default function InputTest() {
	const [value, setValue] = useState('abc');

	return (
		<div className="flex flex-col gap-4">
			<Input disabled placeholder="请输入" />

			<InputGroup>
				<InputGroup.Prefix className="px-2">
					{/* <User size={18} /> */}
					<span>http://</span>
				</InputGroup.Prefix>
				<InputGroup.Input placeholder="请输入" />
				<InputGroup.Suffix>
					<Search size={14} />
				</InputGroup.Suffix>
			</InputGroup>
		</div>
	);
}
