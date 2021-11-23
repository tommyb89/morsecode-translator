# morsecode-translator made by Tomzy
This great little app will translate English words and numbers into a morse code and other way around!

## Tech used
- HTML / SASS / JAVASCRIPT / JEST TESTING

## How it works
-Uuser can write english words or numbers inside the English input field 
- You can write morse code inside morse code input field
- To translate your input from any field click on TRANSLATE button and the translation will be displayed in textbox underneath "Your translation" 

## App breakdown

1. Selected html elements for latter use
2. Created 2 objects with key value pairs with corresponding morse code character
3. Getting the value from input fields and passing them through decoding and encoding functions
4. My encode and decode functions use few build in methods:
* toLowerCase()
* split()
* map()
* join()
5. Tested my encode to englush function with JEST, applied few cases for which app should be tested
6. Functions are imported into the app.js and pssed in to a displayTranslation function. Which takes value from both input fields and passes it through the right translation.
7. Translation is then displayed in a textarea

### Issues that I came across
- main function was made prior to testing env and it made it harder to extract it later on to apply tests, so at first tests were working but then I couldn't display the translation on my website



### What's next?
- Implement testing for decoding function
- Add functionality for sentences
- Create a morse code keyboard/board of buttons
- Implement text to speech function so it reads the translation
