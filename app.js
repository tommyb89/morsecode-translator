// import { morseCode } from "./morse.js";

// Select inputs
const morseInput = document.getElementById("morse-input");
const englishInput = document.getElementById("english-input");
const output = document.querySelector(".output");
// select buttons
const submit = document.querySelector(".btn__submit");
const clear = document.querySelector(".btn__clear");

//Get value from english input field
// const englishText = englishInput.value;

// Divide it into separate letters
// const lettersArr = (str) => str.toLowerCase().split("");

// Function English to Morse Code
export const encodeToMorse = (str) => {
  const lettersArr = str.toLowerCase().split("");
  // Find english letters in the morseCode object and return morse character
  const morseSymbols = lettersArr.map((letter) => alphabet[letter]);
  const morseText = morseSymbols.join(" ");

  return morseText;
};
console.log(encodeToMorse("hello"));
encodeToMorse("hello");

// output.innerHTML = morseText;
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
