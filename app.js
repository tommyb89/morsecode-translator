import { encodeToMorse, decodeMorse } from "./encode.js";

// Select inputs
const morseInput = document.getElementById("morse-input");
const englishInput = document.getElementById("english-input");
const output = document.querySelector(".output");
// Select buttons
const submit = document.querySelector(".btns__submit");
const clearOutput = document.querySelector(".btns__clear");

const footer = document.querySelector("footer");

// Clear input and output values
const clear = () => {
  output.value = "";
  englishInput.value = "";
};

// Display translation
const displayTranslation = (word) => {
  if (englishInput.value) {
    word = englishInput.value;
    return (output.innerHTML = encodeToMorse(word));
  } else if (morseInput.value) {
    word = morseInput.value;
    return (output.innerHTML = decodeMorse(word));
  }
};

const copyright = () => {
  const currentYear = new Date().getFullYear();
  return (footer.innerHTML = `Copyright &copy; ${currentYear} Made by Tomzy`);
};
copyright();
// Event listeners
submit.addEventListener("click", displayTranslation);
clearOutput.addEventListener("click", clear);
