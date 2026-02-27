// TODO: It's better to use `Proxy` replace the `element.value`. But we still need support IE11.
function cloneEvent<
	EventType extends React.SyntheticEvent<any, any>,
	Element extends HTMLInputElement | HTMLTextAreaElement
>(event: EventType, target: Element, value: any): EventType {
	const currentTarget = target.cloneNode(true) as Element;

	// click clear icon
	const newEvent = Object.create(event, {
		target: { value: currentTarget, writable: false, enumerable: false, configurable: false },
		currentTarget: { value: currentTarget, writable: false, enumerable: false, configurable: false }
	});

	currentTarget.value = value;

	return newEvent;
}

// 解析 onChange 事件
export function resolveOnChange<E extends HTMLInputElement | HTMLTextAreaElement>(
	target: E,
	e: React.ChangeEvent<E> | React.MouseEvent<HTMLElement, MouseEvent>,
	onChange: undefined | ((event: React.ChangeEvent<E>) => void),
	targetValue?: string
) {
	if (!onChange) return;
	let event = e;
	if (e.type === 'click') {
		event = cloneEvent(e, target, '');
		onChange(event as React.ChangeEvent<E>);
		return;
	}
	onChange(event as React.ChangeEvent<E>);
}
