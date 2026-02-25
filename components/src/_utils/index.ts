import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCurrentTime(): number {
  return performance.now();
}

export function isObject(value: any) {
  return typeof value === "object" && value !== null;
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
  return typeof value === "function";
}

export function isOn(key: string) {
  return /^on[A-Z]/.test(key);
}

export function isString(value: any) {
  return typeof value === "string";
}

export function isNumber(value: any) {
  return typeof value === "number";
}

export function hasOwn(object: any, key: string) {
  return Object.prototype.hasOwnProperty.call(object, key);
}

export const isArray = Array.isArray;
