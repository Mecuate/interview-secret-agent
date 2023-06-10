export const _00 = 'solucion 0'

import { P00 } from "models";

const sample = "011010101011110101000111010100010011111110101001010100";
const V0 = "0";
const V1 = "1";

export const func_0: P00 = ({ sample, V0, V1 }) => {
	let n0 = 0;
	let n1 = 0;
	sample.split("").forEach((el: string) => {
		el === V0 && n0++;
		el === V1 && n1++;
	});

	return { n0, n1 };
};
console.log(V1, func_0({ sample, V0, V1 }));
