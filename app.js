// import { morseCode } from "./morse.js";

// Select inputs
const morseInput = document.getElementById("morse-input");
const englishInput = document.getElementById("english-input");
const output = document.querySelector(".output");
// select buttons
const submit = document.querySelector(".btn__submit");
const clear = document.querySelector(".btn__clear");

const morseCode = {
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
  "----.": "9",
};

// Function translate to morse code
const encodeToMorse = () => {
  //Get value from english input field
  const englishText = englishInput.value;
  // Divide it into separate letters
  const textArr = englishText.toLowerCase().split("");
  // console.log(textArr);
};

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

// add event listeners to buttons and passing a function to translate
submit.addEventListener("click", decodeMorse);
// submit.addEventListener("click", alert("clicked"));
// Select all the morse code symbols
