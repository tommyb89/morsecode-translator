// Select inputs
const morseInput = document.getElementById("morse-input");
const englishInput = document.getElementById("english-input");
const output = document.querySelector(".output");
// select buttons
const submit = document.querySelector(".btn__submit");
const clear = document.querySelector(".btn__clear");

const alphabet = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  " ": " ",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
};
const morseCode = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
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
const encodeToMorse = (word) => {
  // Divide it into separate letters
  const lettersArr = word.toLowerCase().split("");
  // Find english letters in the morseCode object and return morse character
  const morseSymbols = lettersArr.map((letter) => alphabet[letter]);
  const morseText = morseSymbols.join(" ");
  // output.innerHTML = morseText;
  return morseText;
};

//Get value from english input field
const englishText = englishInput.value;
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
submit.addEventListener("click", encodeToMorse);
