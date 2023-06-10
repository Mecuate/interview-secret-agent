export type P00_result = {
	n0: number;
	n1: number;
};

export type P00_param = { sample: string; V0: string; V1: string };

export type P00 = (params: P00_param) => P00_result;

/* -------------------------------------------------------------------------------- */

export type P01_param = string[] | number[] | object[];

export type P01_result = number | string | object | P01_param;

export type P01 = (params: P01_param) => P01_result;
/* -------------------------------------------------------------------------------- */

export type P02_params = {
	name: string;
	lastName: string;
}[];

export type P02_result = P02_params;

export type P02 = (params: P02_params) => P02_result;
