import { func_1, func_2, p2_sample } from "../src/soluciones";
import { resutl } from "../mock_data/02";

describe("Should sort by name and lastname the array", () => {
	it("case A", () => {
		const solution = func_2(p2_sample);

		expect(solution).toEqual(resutl);
	});

	it("Case B", () => {
		const solution = func_2(p2_sample);
		const selLast = func_1(solution);

		expect(selLast).toEqual(resutl[6]);
	});
});
