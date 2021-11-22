import { expect, it } from "@jest/globals";
import { decodeMorse } from "./app.js";

// Translate symbols to letters

it("should translate .- to A", () => {
  const result = decodeMorse("._");
  expect(result).toBe("A");
});
it("should translate -... to B", () => {
  const result = decodeMorse("-...");
  expect(result).toBe("B");
});
it("should translate -.-. to C", () => {
  const result = decodeMorse("-.-.");
  expect(result).toBe("C");
});
it("should translate .- to D", () => {
  const result = decodeMorse("-..");
  expect(result).toBe("D");
});
it("should translate . to E", () => {
  const result = decodeMorse(".");
  expect(result).toBe("E");
});
it("should translate ..-. to F", () => {
  const result = decodeMorse("..-.");
  expect(result).toBe("F");
});
it("should translate --. to G", () => {
  const result = decodeMorse("--.");
  expect(result).toBe("G");
});
it("should translate ... to H", () => {
  const result = decodeMorse("...");
  expect(result).toBe("H");
});
it("should translate .. to I", () => {
  const result = decodeMorse("..");
  expect(result).toBe("I");
});
it("should translate .--- to J", () => {
  const result = decodeMorse(".---");
  expect(result).toBe("J");
});
it("should translate -.- to K", () => {
  const result = decodeMorse("-.-");
  expect(result).toBe("K");
});
it("should translate .-.. to L", () => {
  const result = decodeMorse(".-..");
  expect(result).toBe("L");
});
it("should translate -- to M", () => {
  const result = decodeMorse("--");
  expect(result).toBe("M");
});
it("should translate -. to N", () => {
  const result = decodeMorse("-.");
  expect(result).toBe("N");
});
it("should translate --- to O", () => {
  const result = decodeMorse("---");
  expect(result).toBe("O");
});
it("should translate .--. to P", () => {
  const result = decodeMorse(".--.");
  expect(result).toBe("P");
});
it("should translate --.- to Q", () => {
  const result = decodeMorse("--.-");
  expect(result).toBe("Q");
});
it("should translate .-. to R", () => {
  const result = decodeMorse(".-.");
  expect(result).toBe("R");
});
it("should translate ... to S", () => {
  const result = decodeMorse("...");
  expect(result).toBe("S");
});
it("should translate - to T", () => {
  const result = decodeMorse("-");
  expect(result).toBe("T");
});
it("should translate ..- to U", () => {
  const result = decodeMorse("..-");
  expect(result).toBe("U");
});
it("should translate ...- to V", () => {
  const result = decodeMorse("...-");
  expect(result).toBe("V");
});
it("should translate .-- to W", () => {
  const result = decodeMorse(".--");
  expect(result).toBe("W");
});
it("should translate -..- to X", () => {
  const result = decodeMorse("-..-");
  expect(result).toBe("X");
});
it("should translate -.-- to Y", () => {
  const result = decodeMorse("-.--");
  expect(result).toBe("Y");
});
it("should translate --.. to Z", () => {
  const result = decodeMorse("--..");
  expect(result).toBe("Z");
});
it("should translate ----- to 0", () => {
  const result = decodeMorse("-----");
  expect(result).toBe("0");
});
it("should translate .---- to 1", () => {
  const result = decodeMorse(".----");
  expect(result).toBe("1");
});
it("should translate ..---to 2", () => {
  const result = decodeMorse("..---");
  expect(result).toBe("2");
});
it("should translate ...-- to 3", () => {
  const result = decodeMorse("...--");
  expect(result).toBe("3");
});
it("should translate ....- to 4", () => {
  const result = decodeMorse("....-");
  expect(result).toBe("4");
});
it("should translate ..... to 5", () => {
  const result = decodeMorse(".....");
  expect(result).toBe("5");
});
it("should translate -.... to 6", () => {
  const result = decodeMorse("-....");
  expect(result).toBe("6");
});
it("should translate --... to 7", () => {
  const result = decodeMorse("--...");
  expect(result).toBe("7");
});
it("should translate ---..to 8", () => {
  const result = decodeMorse("---..");
  expect(result).toBe("8");
});
it("should translate ----. to 9", () => {
  const result = decodeMorse("----.");
  expect(result).toBe("9");
});
