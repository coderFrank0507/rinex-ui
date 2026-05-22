import { clsx, type ClassValue } from 'clsx';
import React from 'react';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getCurrentTime(): number {
	return performance.now();
}

export function isObject(value: any) {
	return typeof value === 'object' && value !== null;
}

/**
 * 判断值是否发生过变化
 * @param newValue
 * @param oldValue
 * @returns boolean
 */
export function hasChanged(newValue: any, oldValue: any) {
	return !Object.is(newValue, oldValue);
}

export function isFunction(value: any) {
	return typeof value === 'function';
}

export function isOn(key: string) {
	return /^on[A-Z]/.test(key);
}

export function isString(value: any) {
	return typeof value === 'string';
}

export function isNumber(value: any) {
	return typeof value === 'number';
}

export function hasOwn(object: any, key: string) {
	return Object.prototype.hasOwnProperty.call(object, key);
}

export const isArray = Array.isArray;

/**
 * 生成唯一值
 * @param length 生成唯一值的长度：默认5，最短3，最长11
 * @returns string
 */
export const useUID = (length = 8) => {
	const [id, setId] = useState<string | null>(null);

	useEffect(() => {
		queueMicrotask(() => {
			setId(
				Math.random()
					.toString(36)
					.slice(-Math.max(3, Math.min(length, 11)))
			);
		});
	}, [length]);

	return id;
};

export function hasTargetChild(
	children: React.ReactNode,
	parentDisplayName: string,
	displayName: string
) {
	const hasTarget = React.Children.toArray(children).some((child) => {
		if (!React.isValidElement(child)) return false;
		if (typeof child.type === 'string') return false;
		return (child.type as any).displayName === displayName;
	});

	if (!hasTarget) {
		console.error(`Component: ${parentDisplayName} must used ${displayName}`);
	}

	return hasTarget;
}
