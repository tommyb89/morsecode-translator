import { encodeToMorse } from "./encode";

// Select inputs
const morseInput = document.getElementById("morse-input").value;
const englishInput = document.getElementById("english-input").value;
const output = document.querySelector(".output");
// Select buttons
const submit = document.querySelector(".btn__submit");
const clear = document.querySelector(".btn__clear");

encodeToMorse(englishInput);

output.innerHTML = morseText;

// Event listeners
submit.addEventListener("click", encodeToMorse);
console.log(encodeToMorse(englishInput));
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
