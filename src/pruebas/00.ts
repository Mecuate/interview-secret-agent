import { P00, P00_param } from "models";
export const _00 = "prueba cero";

/* 
queremos saber cuantos 0 y 1 hay en este string
esperamos una respuesta dividida en objeto conteniendo los valores re la sigiente forma:
        {
            n0: n
            n1: n
        }

*/
export const param0: P00_param = {
	sample: "011010101011110101000111010100010011111110101001010100",
	V0: "0",
	V1: "1",
};

export const func_0: P00 = () => {
	console.log("result");
};
