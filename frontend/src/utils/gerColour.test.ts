import { getColour } from "./getColour";
describe("getColour", () => {
  test.each`
    input         | expectedOutput
    ${"burger"}   | ${"#2F43A7"}
    ${"kebab"}    | ${"#ff7c4d"}
    ${"sandwich"} | ${"#ffa600"}
    ${"unknown"}  | ${"#ffa611"}
  `(
    "getColour($input) returns $expectedOutput",
    ({ input, expectedOutput }) => {
      const output = getColour(input);

      expect(output).toEqual(expectedOutput);
    }
  );
});

export {};
