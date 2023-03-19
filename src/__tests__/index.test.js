import { config } from "../index.js";

test("string is a string", () => {
	expect(typeof "string").toBe("string");
});

test("config is an object", () => {
	expect(typeof config).toBe("object");
});