import { useMemo } from 'react';

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

export type ThemeColors = 'blue' | 'green' | 'orange' | 'rose' | 'violet' | (string & {});

export const colorMap: Record<ThemeColors, string> = {
	blue: '#1447e6',
	green: '#5ea600',
	orange: '#f64900',
	rose: '#ed0040',
	violet: '#8023ff'
};

export let hasInitGlobalThemeColor = false;
export function initGlobalThemeColor() {
	if (hasInitGlobalThemeColor) return;
	hasInitGlobalThemeColor = true;

	let rinexUIStyle = document.querySelector('style[data-token="ru-theme-variables"]');
	const isExist = !!rinexUIStyle;
	if (!rinexUIStyle) {
		rinexUIStyle = document.createElement('style');
		rinexUIStyle.setAttribute('data-token', 'ru-theme-variables');
	}
	const content = levels.reduce((pre, cur, i) => {
		pre += `--ru-primary-color-${i + 1}:rgba(20,71,230,${cur});`;
		return pre;
	}, '');
	rinexUIStyle.textContent = `:root{${content}}`;
	if (!isExist) document.head.appendChild(rinexUIStyle);
}

export function useThemeCSS(id: string, primaryColor: ThemeColors) {
	const className = `ru-theme-${id}`;
	const cssVariables = useMemo(() => {
		const color = isHexColor(primaryColor)
			? primaryColor
			: (colorMap[primaryColor] ?? colorMap.blue);

		let hex = color.replace('#', '');

		if (hex.length === 3) {
			hex = hex
				.split('')
				.map((c) => c + c)
				.join('');
		}

		const r = parseInt(hex.slice(0, 2), 16);
		const g = parseInt(hex.slice(2, 4), 16);
		const b = parseInt(hex.slice(4, 6), 16);

		return levels.reduce((pre, cur, i) => {
			pre += `--ru-primary-color-${i + 1}:rgba(${r},${g},${b},${cur});`;
			return pre;
		}, '');
	}, [primaryColor]);

	return { className, cssVariables };
}
