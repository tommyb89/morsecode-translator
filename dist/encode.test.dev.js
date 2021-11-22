"use strict";

var _globals = require("@jest/globals");

var _encode = require("./encode");

// Translate symbols to letters
(0, _globals.it)("should translate A to .-", function () {
  var result = (0, _encode.encodeToMorse)("A");
  (0, _globals.expect)(result).toBe(".-");
});