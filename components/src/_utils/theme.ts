//hex颜色转rgb颜色
function HexToRgb(str: string) {
	str = str.replace('#', '');
	const hxs: any = str.match(/../g);
	for (let i = 0; i < 3; i++) hxs[i] = parseInt(hxs[i], 16);
	return hxs;
}

//rgb颜色转hex颜色
function RgbToHex(a: number, b: number, c: number) {
	const hexs = [a.toString(16), b.toString(16), c.toString(16)];
	for (let i = 0; i < 3; i++) {
		if (hexs[i]!.length == 1) hexs[i] = '0' + hexs[i];
	}
	return '#' + hexs.join('');
}
//加深
export function darken(color: string, level: number) {
	const rgbc = HexToRgb(color);
	for (let i = 0; i < 3; i++) rgbc[i] = Math.floor(rgbc[i] * (1 - level));
	return RgbToHex(rgbc[0], rgbc[1], rgbc[2]);
}
//变淡
export function lighten(color: string, level: number) {
	const rgbc = HexToRgb(color);
	for (let i = 0; i < 3; i++) rgbc[i] = Math.floor((255 - rgbc[i]) * level + rgbc[i]);
	return RgbToHex(rgbc[0], rgbc[1], rgbc[2]);
}

export function isHexColor(str: string) {
	return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(str);
}

const levels = [1, 0.8, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.05];

export function setTargetColor(hex: string, container: HTMLElement) {
	hex = hex.replace('#', '');

	if (hex.length === 3) {
		hex = hex
			.split('')
			.map((c) => c + c)
			.join('');
	}

	const r = parseInt(hex.slice(0, 2), 16);
	const g = parseInt(hex.slice(2, 4), 16);
	const b = parseInt(hex.slice(4, 6), 16);
	levels.forEach((a, i) => {
		container.style.setProperty(`--ru-primary-color-${i + 1}`, `rgba(${r}, ${g}, ${b}, ${a})`);
	});
}

export function themeColorChange(hex: string, container?: HTMLElement) {
	hex = hex.replace('#', '');

	if (hex.length === 3) {
		hex = hex
			.split('')
			.map((c) => c + c)
			.join('');
	}

	const r = parseInt(hex.slice(0, 2), 16);
	const g = parseInt(hex.slice(2, 4), 16);
	const b = parseInt(hex.slice(4, 6), 16);

	if (container) {
		levels.forEach((a, i) => {
			container.style.setProperty(`--ru-primary-color-${i + 1}`, `rgba(${r}, ${g}, ${b}, ${a})`);
		});
	} else {
		let rinexUIStyle = document.querySelector('style[data-from="rinex-ui"]');
		const isExist = !!rinexUIStyle;
		if (!rinexUIStyle) {
			rinexUIStyle = document.createElement('style');
			rinexUIStyle.setAttribute('data-from', 'rinex-ui');
		}
		const content = levels.reduce((pre, cur, i) => {
			pre += `--ru-primary-color-${i + 1}: rgba(${r}, ${g}, ${b}, ${cur});\n`;
			return pre;
		}, '');
		rinexUIStyle.textContent = `:root {${content}}`;
		if (!isExist) document.head.appendChild(rinexUIStyle);
	}
}
