import { P01 } from "models";
export const _01 = "p1";

export const func_1: P01 = function (arr) {
	if (arr.length <= 0 || arr.length >= 1000) return -1;
	return arr[arr.length - 1];
};
