import { P02, P02_params } from "models";

export const _02 = 0;
export const p2_sample: P02_params = [
	{ name: "Pedro", lastName: "Roberts" },
	{ name: "Miguel", lastName: "zabala" },
	{ name: "Mildred", lastName: "Hernandez" },
	{ name: "Dan", lastName: "Xanduu" },
	{ name: "Pedro", lastName: "Acosta" },
	{ name: "Miguel", lastName: "Zabal" },
	{ name: "Carlos", lastName: "Olalde" },
];

export const func_2: P02 = (data) => {
	return data.sort((a, b) => {
		const nameA = `${a.name} ${a.lastName}`.toUpperCase();
		const nameB = `${b.name} ${b.lastName}`.toUpperCase();
		if (nameA < nameB) return -1;
		if (nameA > nameB) return 1;
		return 0;
	});
};
