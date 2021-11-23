import { expect, it } from "@jest/globals";
import { encodeToMorse } from "./encode.js";

// Translate symbols to letters

it("should translate A to .-", () => {
  const result = encodeToMorse("A");
  expect(result).toBe(".-");
});
it("should translate hello to .... . .-.. .-.. ---", () => {
  const result = encodeToMorse("hello");
  expect(result).toBe(".... . .-.. .-.. ---");
});
it("should translate empty field to empty field", () => {
  const result = encodeToMorse("hello");
  expect(result).toBe(".... . .-.. .-.. ---");
});
