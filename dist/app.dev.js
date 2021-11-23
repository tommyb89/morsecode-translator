"use strict";

var _encode = require("./encode.js");

// Select inputs
var morseInput = document.getElementById("morse-input").value;
var englishInput = document.getElementById("english-input");
var output = document.querySelector(".output"); // Select buttons

var submit = document.querySelector(".btn__submit");
var clear = document.querySelector(".btn__clear");
var wordToTranslate = englishInput.value;

var displayTranslation = function displayTranslation(wordToTranslate) {
  output.innerHTML = (0, _encode.encodeToMorse)(wordToTranslate);
};

console.log(displayTranslation(wordToTranslate));
displayTranslation("hello"); // Event listeners

submit.addEventListener("click", displayTranslation); ////////////////////////////////////////////////////////////////
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