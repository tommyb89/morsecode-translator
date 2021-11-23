import { encodeToMorse } from "./encode.js";

// Select inputs
const morseInput = document.getElementById("morse-input");
const englishInput = document.getElementById("english-input");
const output = document.querySelector(".output");
// Select buttons
const submit = document.querySelector(".btn__submit");
const clearOutput = document.querySelector(".btn__clear");

const clear = () => (output.value = "");

console.log(englishInput.value);
const displayTranslation = (word) => {
  word = englishInput.value;
  output.innerHTML = encodeToMorse(word);
};

displayTranslation("hello");
// Event listeners
submit.addEventListener("click", displayTranslation);
clearOutput.addEventListener("click", clear);
////////////////////////////////////////////////////////////////
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
