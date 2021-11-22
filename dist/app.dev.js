"use strict";

var _encode = require("./encode");

// Select inputs
var morseInput = document.getElementById("morse-input").value;
var englishInput = document.getElementById("english-input").value;
var output = document.querySelector(".output"); // Select buttons

var submit = document.querySelector(".btn__submit");
var clear = document.querySelector(".btn__clear");
(0, _encode.encodeToMorse)(englishInput);
output.innerHTML = morseText; // Event listeners

submit.addEventListener("click", _encode.encodeToMorse);
console.log((0, _encode.encodeToMorse)(englishInput)); ////////////////////////////////////////////////////////////////
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