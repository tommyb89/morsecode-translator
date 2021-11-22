"use strict";

var _globals = require("@jest/globals");

var _app = require("./app");

// Translate symbols to letters
(0, _globals.it)("should translate A ", function () {
  var result = (0, _app.encodeToMorse)("A");
  (0, _globals.expect)(result).toBe(".-");
});