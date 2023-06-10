import { func_0 } from "../src/soluciones";
import { A, B, C, D, E } from "../mock_data/00";

describe("Should count how many times the V0 and V1 values are in the sting", () => {
	it("case A", () => {
		const { n0, n1 } = func_0(A);
		expect(n0).toBe(25);
		expect(n1).toBe(29);
	});

	it("Case B", () => {
		const { n0, n1 } = func_0(B);
		expect(n0).toBe(180);
		expect(n1).toBe(186);
	});

	it("Case C", () => {
		const { n0, n1 } = func_0(C);
		expect(n0).toBe(97);
		expect(n1).toBe(102);
	});

	it("Case D", () => {
		const { n0, n1 } = func_0(D);
		expect(n0).toBe(27);
		expect(n1).toBe(28);
	});

	it("Case E", () => {
		const { n0, n1 } = func_0(E);
		expect(n0).toBe(83);
		expect(n1).toBe(77);
	});
});
