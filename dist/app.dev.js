"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encodeToMorse = void 0;
// import { morseCode } from "./morse.js";
// Select inputs
var morseInput = document.getElementById("morse-input");
var englishInput = document.getElementById("english-input");
var output = document.querySelector(".output"); // select buttons

var submit = document.querySelector(".btn__submit");
var clear = document.querySelector(".btn__clear"); //Get value from english input field
// const englishText = englishInput.value;
// Divide it into separate letters
// const lettersArr = (str) => str.toLowerCase().split("");
// Function English to Morse Code

var encodeToMorse = function encodeToMorse(str) {
  var lettersArr = str.toLowerCase().split(""); // Find english letters in the morseCode object and return morse character

  var morseSymbols = lettersArr.map(function (letter) {
    return alphabet[letter];
  });
  var morseText = morseSymbols.join(" ");
  return morseText;
};

exports.encodeToMorse = encodeToMorse;
console.log(encodeToMorse("hello"));
encodeToMorse("hello"); // output.innerHTML = morseText;
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////////////////////
// // Function decode morse
// const decodeMorse = () => {
//   //Get value from morse input field
//   const morseText = morseInput.value;
//   // Divide it into separate characters
//   const textArr = morseText.split("");
//   // console.log(textArr);
//   // const englishLetters = morseCode.map((char) => morseCode[char]);
//   // console.log(englishLetters);
// };
// Event listeners
// submit.addEventListener("click", encodeToMorse);