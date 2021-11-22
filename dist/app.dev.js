"use strict";

// import { morseCode } from "./morse.js";
// Select inputs
var morseInput = document.getElementById("morse-input");
var englishInput = document.getElementById("english-input");
var output = document.querySelector(".output"); // select buttons

var submit = document.querySelector(".btn__submit");
var clear = document.querySelector(".btn__clear");
var morseCode = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
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
}; // Function decode morse

var decodeMorse = function decodeMorse() {
  var morseText = morseInput.value;
  var textArr = morseText.split("");
  console.log(textArr);
}; // add event listeners to buttons and passing a function to translate


submit.addEventListener("click", decodeMorse); // submit.addEventListener("click", alert("clicked"));
// Select all the morse code symbols