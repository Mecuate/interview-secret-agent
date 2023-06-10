const sample = "011010101011110101000111010100010011111110101001010100";
const V0 = 0;
const V1 = 1;

export function func_0(param: string) {
	let n0 = 0;
	let n1 = 0;
	param.split("").forEach((el: string) => {
		el == V0 ? n0++ : n1++;
	});

	return { n0, n1 };
}
console.log(V1, func_0(sample));
