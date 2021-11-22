import { expect, it } from "@jest/globals";
import { encodeToMorse } from "./app.js";

// Translate symbols to letters

it("should translate A ", () => {
  const result = encodeToMorse("A");
  expect(result).toBe(".-");
});
