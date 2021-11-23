import { expect, it } from "@jest/globals";
import { encodeToMorse } from "./translate.js";

// Translate symbols to letters

it("should translate A to .-", () => {
  const result = encodeToMorse("A");
  expect(result).toBe(".-");
});
it("should translate hello to .... . .-.. .-.. ---", () => {
  const result = encodeToMorse("hello");
  expect(result).toBe(".... . .-.. .-.. ---");
});
it("should translate empty field to be undefined", () => {
  const result = encodeToMorse("");
  expect(result).toBeUndefined();
});
it("should translate 1944  to .---- ----. ....- ....-", () => {
  const result = encodeToMorse("1944");
  expect(result).toBe(".---- ----. ....- ....-");
});
it("should translate !£$% to undefined ", () => {
  const result = encodeToMorse("!£$%");
  expect(result).toBeUndefined();
});
