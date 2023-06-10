import { func_0 } from "../src/soluciones";
import { A, B, C, D, E } from "./mock_data/03";

describe("Puebas para cuentaNumeros", () => {
	it("Should count how many times the V0 and V1 values ar in the sting", () => {
		const { n0, n1 } = func_0(A.sample);
		expect(n0).toBe(25);
		expect(n1).toBe(25);
	});
});
