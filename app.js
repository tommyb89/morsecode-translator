import { encodeToMorse, decodeMorse } from "./encode.js";

// Select inputs
const morseInput = document.getElementById("morse-input");
const englishInput = document.getElementById("english-input");
const output = document.querySelector(".output");
// Select buttons
const submit = document.querySelector(".btn__submit");
const clearOutput = document.querySelector(".btn__clear");

// Clear input and output values
const clear = () => {
  output.value = "";
  englishInput.value = "";
};

// Display translation
const displayTranslation = (word) => {
  if (englishInput.value) {
    word = englishInput.value;
    output.innerHTML = encodeToMorse(word);
  } else if (morseInput.value) {
    word = morseInput.value;
    output.innerHTML = decodeMorse(word);
  }
};

// Event listeners
submit.addEventListener("click", displayTranslation);

clearOutput.addEventListener("click", clear);
