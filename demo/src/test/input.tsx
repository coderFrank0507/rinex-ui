import { useState } from 'react';
import { Input, InputGroup } from 'rinex-ui';
// import { Input } from 'antd';
import { User, Search } from 'lucide-react';

export default function InputTest() {
	const [value, setValue] = useState('abc');

	return (
		<div className="flex flex-col gap-4">
			<Input placeholder="请输入" />

			<InputGroup>
				<InputGroup.Prefix>
					<User size={18} />
				</InputGroup.Prefix>
				<InputGroup.Input placeholder="请输入" />
				<InputGroup.Suffix>
					<Search size={14} />
				</InputGroup.Suffix>
			</InputGroup>
		</div>
	);
}
