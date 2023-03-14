import { generateEndpointUri } from "./generateEndpointUri";
describe("generateEndpointUri", () => {
  test.each`
    input                             | expectedOutput
    ${"chart/comment_threads"}        | ${"http://localhost:8000/chart/comment_threads"}
    ${"chart/data"}                   | ${"http://localhost:8000/chart/data"}
    ${"chart/comment_threads/abcdef"} | ${"http://localhost:8000/chart/comment_threads/abcdef"}
  `(
    "generatEndpointUri(input) returns $expectedOutput",
    ({ input, expectedOutput }) => {
      const output = generateEndpointUri(input);

      expect(output).toEqual(expectedOutput);
    }
  );
});

export {};
