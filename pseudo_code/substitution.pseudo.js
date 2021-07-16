const substitutionModule = (function () {
  // create a standardAlphabet value and put it into an array
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function checkForUniqueness(array) {
    // use new Set to create an object that stores the value of the input array
    return new Set(array).size === array.length;
  }

  function substitution(input, alphabet, encode = true) {
    // if alphabet does not exist, or the length of alphabet is not 26, or there are repeated characters, return false
    if (
      !alphabet ||
      alphabet.length !== 26 ||
      checkForUniqueness(alphabet) === false
    )
      return false;
    // create a new variable, setting all of the input characters to lowercase
    const inputLowerCase = input.toLowerCase();
    //create a new array, splitting the characters from the inputLowerCase variable
    const inputArray = inputLowerCase.split("");
    //create a new variable, splitting the alphabet characters into an array
    const alphabetArray = alphabet.split("");
    // create a new array variable named result
    const result = [];

    // if encode is set to true, loop through the input array, setting the iterator to inputChar
    if (encode === true) {
      inputArray.forEach((inputChar) => {
        // if the standardAlphabet does not include any character from inputChar, push inputChar to the result array
        if (!standardAlphabet.includes(inputChar)) {
          result.push(inputChar);
          //loop through the standardAlphabet array, setting the iterator to standardAlphaLetter, and setting the index
        } else {
          standardAlphabet.forEach((standardAlphaLetter, index) => {
            //if inputChar matches standardAlphaLetter, pusy the index of alphabetArray to the result array
            if (inputChar === standardAlphaLetter) {
              result.push(alphabetArray[index]);
            }
          });
        }
      });
      //return result as a sting
      return result.join("");
      // loop through the inputArray setting the iterator to inputChar
    } else {
      inputArray.forEach((inputChar) => {
        // if the alphabetArray does not include any character from inputChar, push inputChar to the result array
        if (!alphabetArray.includes(inputChar)) {
          result.push(inputChar);
        } else {
          //loop through the alphabetArray array, setting the iterator to alphabetArrayChar, and setting the index
          alphabetArray.forEach((alphabetArrayChar, index) => {
            // if inputChar matches alphabetArrayChar, pusy the index of standardAlphabet to the result array
            if (inputChar === alphabetArrayChar) {
              result.push(standardAlphabet[index]);
            }
          });
        }
      });
      //return result as a string
      return result.join("");
    }
  }
  return { substitution };
})();

module.exports = { substitution: substitutionModule.substitution };
