"use strict";

var _encode = require("./encode.js");

// Select inputs
var morseInput = document.getElementById("morse-input");
var englishInput = document.getElementById("english-input");
var output = document.querySelector(".output"); // Select buttons

var submit = document.querySelector(".btn__submit");
var clearOutput = document.querySelector(".btn__clear"); // Clear input and output values

var clear = function clear() {
  output.value = "";
  englishInput.value = "";
}; // Display translation


var displayTranslation = function displayTranslation(word) {
  if (englishInput.value) {
    word = englishInput.value;
    return output.innerHTML = (0, _encode.encodeToMorse)(word);
  } else if (morseInput.value) {
    word = morseInput.value;
    return output.innerHTML = (0, _encode.decodeMorse)(word);
  }
}; // Event listeners


submit.addEventListener("click", displayTranslation);
clearOutput.addEventListener("click", clear);