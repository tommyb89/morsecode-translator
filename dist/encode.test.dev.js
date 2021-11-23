"use strict";

var _globals = require("@jest/globals");

var _encode = require("./encode.js");

// Translate symbols to letters
(0, _globals.it)("should translate A to .-", function () {
  var result = (0, _encode.encodeToMorse)("A");
  (0, _globals.expect)(result).toBe(".-");
});
(0, _globals.it)("should translate hello to .... . .-.. .-.. ---", function () {
  var result = (0, _encode.encodeToMorse)("hello");
  (0, _globals.expect)(result).toBe(".... . .-.. .-.. ---");
});
(0, _globals.it)("should translate empty field to be undefined", function () {
  var result = (0, _encode.encodeToMorse)("");
  (0, _globals.expect)(result).toBeUndefined();
});
(0, _globals.it)("should translate 1944  to .---- ----. ....- ....-", function () {
  var result = (0, _encode.encodeToMorse)("1944");
  (0, _globals.expect)(result).toBe(".---- ----. ....- ....-");
});
(0, _globals.it)("should translate !£$% to undefined ", function () {
  var result = (0, _encode.encodeToMorse)("!£$%");
  (0, _globals.expect)(result).toBeUndefined();
});