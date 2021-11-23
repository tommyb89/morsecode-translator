"use strict";

var _encode = require("./encode.js");

// Select inputs
var morseInput = document.getElementById("morse-input").value;
var englishInput = document.getElementById("english-input");
var output = document.querySelector(".output"); // Select buttons

var submit = document.querySelector(".btn__submit");
var clearOutput = document.querySelector(".btn__clear");

var clear = function clear() {
  return output.value = "";
};

console.log(englishInput.value);

var displayTranslation = function displayTranslation(word) {
  word = englishInput.value;
  output.innerHTML = (0, _encode.encodeToMorse)(word);
};

displayTranslation("hello"); // Event listeners

submit.addEventListener("click", displayTranslation);
clearOutput.addEventListener("click", clear); ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////////////////////
// // Function decode morse
// const decodeMorse = () => {
//   //Get value from morse input field
//   const englishText = morseInput.value;
//   // Divide it into separate characters
//   const textArr = morseText.split("");
//   // console.log(textArr);
//   // const englishLetters = morseCode.map((char) => morseCode[char]);
//   // console.log(englishLetters);
// };