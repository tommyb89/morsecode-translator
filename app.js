import { encodeToMorse } from "./encode.js";

// Select inputs
const morseInput = document.getElementById("morse-input").value;
const englishInput = document.getElementById("english-input");
const output = document.querySelector(".output");
// Select buttons
const submit = document.querySelector(".btn__submit");
const clear = document.querySelector(".btn__clear");

const wordToTranslate = englishInput.value;
const displayTranslation = (wordToTranslate) => {
  output.innerHTML = encodeToMorse(wordToTranslate);
};
console.log(displayTranslation(wordToTranslate));
displayTranslation("hello");
// Event listeners
submit.addEventListener("click", displayTranslation);

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
