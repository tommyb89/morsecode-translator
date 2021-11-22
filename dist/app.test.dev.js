"use strict";

var _globals = require("@jest/globals");

var _app = require("./app.js");

// Translate symbols to letters
(0, _globals.it)("should translate .- to A", function () {
  var result = (0, _app.decodeMorse)("._");
  (0, _globals.expect)(result).toBe("A");
});
(0, _globals.it)("should translate -... to B", function () {
  var result = (0, _app.decodeMorse)("-...");
  (0, _globals.expect)(result).toBe("B");
});
(0, _globals.it)("should translate -.-. to C", function () {
  var result = (0, _app.decodeMorse)("-.-.");
  (0, _globals.expect)(result).toBe("C");
});
(0, _globals.it)("should translate .- to D", function () {
  var result = (0, _app.decodeMorse)("-..");
  (0, _globals.expect)(result).toBe("D");
});
(0, _globals.it)("should translate . to E", function () {
  var result = (0, _app.decodeMorse)(".");
  (0, _globals.expect)(result).toBe("E");
});
(0, _globals.it)("should translate ..-. to F", function () {
  var result = (0, _app.decodeMorse)("..-.");
  (0, _globals.expect)(result).toBe("F");
});
(0, _globals.it)("should translate --. to G", function () {
  var result = (0, _app.decodeMorse)("--.");
  (0, _globals.expect)(result).toBe("G");
});
(0, _globals.it)("should translate ... to H", function () {
  var result = (0, _app.decodeMorse)("...");
  (0, _globals.expect)(result).toBe("H");
});
(0, _globals.it)("should translate .. to I", function () {
  var result = (0, _app.decodeMorse)("..");
  (0, _globals.expect)(result).toBe("I");
});
(0, _globals.it)("should translate .--- to J", function () {
  var result = (0, _app.decodeMorse)(".---");
  (0, _globals.expect)(result).toBe("J");
});
(0, _globals.it)("should translate -.- to K", function () {
  var result = (0, _app.decodeMorse)("-.-");
  (0, _globals.expect)(result).toBe("K");
});
(0, _globals.it)("should translate .-.. to L", function () {
  var result = (0, _app.decodeMorse)(".-..");
  (0, _globals.expect)(result).toBe("L");
});
(0, _globals.it)("should translate -- to M", function () {
  var result = (0, _app.decodeMorse)("--");
  (0, _globals.expect)(result).toBe("M");
});
(0, _globals.it)("should translate -. to N", function () {
  var result = (0, _app.decodeMorse)("-.");
  (0, _globals.expect)(result).toBe("N");
});
(0, _globals.it)("should translate --- to O", function () {
  var result = (0, _app.decodeMorse)("---");
  (0, _globals.expect)(result).toBe("O");
});
(0, _globals.it)("should translate .--. to P", function () {
  var result = (0, _app.decodeMorse)(".--.");
  (0, _globals.expect)(result).toBe("P");
});
(0, _globals.it)("should translate --.- to Q", function () {
  var result = (0, _app.decodeMorse)("--.-");
  (0, _globals.expect)(result).toBe("Q");
});
(0, _globals.it)("should translate .-. to R", function () {
  var result = (0, _app.decodeMorse)(".-.");
  (0, _globals.expect)(result).toBe("R");
});
(0, _globals.it)("should translate ... to S", function () {
  var result = (0, _app.decodeMorse)("...");
  (0, _globals.expect)(result).toBe("S");
});
(0, _globals.it)("should translate - to T", function () {
  var result = (0, _app.decodeMorse)("-");
  (0, _globals.expect)(result).toBe("T");
});
(0, _globals.it)("should translate ..- to U", function () {
  var result = (0, _app.decodeMorse)("..-");
  (0, _globals.expect)(result).toBe("U");
});
(0, _globals.it)("should translate ...- to V", function () {
  var result = (0, _app.decodeMorse)("...-");
  (0, _globals.expect)(result).toBe("V");
});
(0, _globals.it)("should translate .-- to W", function () {
  var result = (0, _app.decodeMorse)(".--");
  (0, _globals.expect)(result).toBe("W");
});
(0, _globals.it)("should translate -..- to X", function () {
  var result = (0, _app.decodeMorse)("-..-");
  (0, _globals.expect)(result).toBe("X");
});
(0, _globals.it)("should translate -.-- to Y", function () {
  var result = (0, _app.decodeMorse)("-.--");
  (0, _globals.expect)(result).toBe("Y");
});
(0, _globals.it)("should translate --.. to Z", function () {
  var result = (0, _app.decodeMorse)("--..");
  (0, _globals.expect)(result).toBe("Z");
});
(0, _globals.it)("should translate ----- to 0", function () {
  var result = (0, _app.decodeMorse)("-----");
  (0, _globals.expect)(result).toBe("0");
});
(0, _globals.it)("should translate .---- to 1", function () {
  var result = (0, _app.decodeMorse)(".----");
  (0, _globals.expect)(result).toBe("1");
});
(0, _globals.it)("should translate ..---to 2", function () {
  var result = (0, _app.decodeMorse)("..---");
  (0, _globals.expect)(result).toBe("2");
});
(0, _globals.it)("should translate ...-- to 3", function () {
  var result = (0, _app.decodeMorse)("...--");
  (0, _globals.expect)(result).toBe("3");
});
(0, _globals.it)("should translate ....- to 4", function () {
  var result = (0, _app.decodeMorse)("....-");
  (0, _globals.expect)(result).toBe("4");
});
(0, _globals.it)("should translate ..... to 5", function () {
  var result = (0, _app.decodeMorse)(".....");
  (0, _globals.expect)(result).toBe("5");
});
(0, _globals.it)("should translate -.... to 6", function () {
  var result = (0, _app.decodeMorse)("-....");
  (0, _globals.expect)(result).toBe("6");
});
(0, _globals.it)("should translate --... to 7", function () {
  var result = (0, _app.decodeMorse)("--...");
  (0, _globals.expect)(result).toBe("7");
});
(0, _globals.it)("should translate ---..to 8", function () {
  var result = (0, _app.decodeMorse)("---..");
  (0, _globals.expect)(result).toBe("8");
});
(0, _globals.it)("should translate ----. to 9", function () {
  var result = (0, _app.decodeMorse)("----.");
  (0, _globals.expect)(result).toBe("9");
});