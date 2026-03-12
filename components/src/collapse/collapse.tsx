'use client';

import { useConfigContext } from '../_utils/hooks';

const Collapse = () => {
	const context = useConfigContext();

	return (
		<div data-slot="collapse" className="text-[var(--ru-text-color)]">
			collapse
		</div>
	);
};

export default Collapse;
