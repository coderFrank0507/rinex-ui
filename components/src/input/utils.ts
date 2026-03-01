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

type EventType<E extends HTMLInputElement | HTMLTextAreaElement> =
	| React.ChangeEvent<E>
	| React.MouseEvent<HTMLElement, MouseEvent>;
// 解析 onChange 事件
export function resolveOnChange<E extends HTMLInputElement | HTMLTextAreaElement>(
	target: E,
	e: EventType<E>,
	onChange: undefined | ((event: React.ChangeEvent<E>) => void),
	targetValue?: string
) {
	if (!onChange) return;

	let event: EventType<E>;
	if (e.type === 'click') {
		event = cloneEvent(e, target, '');
		onChange(event as React.ChangeEvent<E>);
		return;
	}

	event = cloneEvent(e, target, targetValue);
	onChange(event as React.ChangeEvent<E>);
}
