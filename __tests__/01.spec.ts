import { func_1 } from "../src/soluciones";

describe("Should return the last item in array or -1 if conditions arn't meet", () => {
	it("case A", () => {
		const result = func_1([1, 21, 2, 12, 12, 1, 21, 1, 1, 1, 1, 1, 1, 1, 23, 7]);

		expect(result).toBe(7);
	});

	it("Case B", () => {
		const result = func_1([...new Array(2000).fill(9), 0]);

		expect(result).toBe(-1);
	});

	it("Case C", () => {
		const result = func_1([]);

		expect(result).toBe(-1);
	});

	it("Case D", () => {
		const result = func_1(["success"]);

		expect(result).toBe("success");
	});

	it("Case E", () => {
		const result = func_1([
			[1, 2],
			[1, 2],
			[1, 2],
			[1, 2],
			["a", "b"],
		]);

		expect(result).toEqual(["a", "b"]);
	});
});
