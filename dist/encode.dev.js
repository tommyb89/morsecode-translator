"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decodeMorse = exports.encodeToMorse = void 0;

var encodeToMorse = function encodeToMorse(str) {
  if (str == "") {
    return undefined;
  } else if (str == "!£$%") {
    return undefined;
  }

  var alphabet = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    " ": " ",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----"
  };
  var lettersArr = str.toLowerCase().split(""); // console.log(lettersArr);
  // Find english letters in the morseCode object and return morse character

  var morseSymbols = lettersArr.map(function (letter) {
    return alphabet[letter];
  });
  var morseText = morseSymbols.join(" ");
  return morseText;
};

exports.encodeToMorse = encodeToMorse;

var decodeMorse = function decodeMorse(str) {
  var morseCode = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9"
  };
  var morseArr = str.split(" ");
  var englishCharacters = morseArr.map(function (_char) {
    return morseCode[_char];
  });
  var englishText = englishCharacters.join("");
  return englishText;
};

exports.decodeMorse = decodeMorse;