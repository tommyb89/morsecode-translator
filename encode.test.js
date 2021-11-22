import { expect, it } from "@jest/globals";
import { encodeToMorse } from "./encode";

// Translate symbols to letters

it("should translate A to .-", () => {
  const result = encodeToMorse("A");
  expect(result).toBe(".-");
});
