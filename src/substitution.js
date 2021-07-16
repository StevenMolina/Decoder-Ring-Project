const substitutionModule = (function () {
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function checkForUniqueness(array) {
    return new Set(array).size === array.length;
  }

  function substitution(input, alphabet, encode = true) {
    if (
      !alphabet ||
      alphabet.length !== 26 ||
      checkForUniqueness(alphabet) === false
    )
      return false;
    const inputLowerCase = input.toLowerCase();
    const inputArray = inputLowerCase.split("");
    const alphabetArray = alphabet.split("");
    const result = [];

    if (encode === true) {
      inputArray.forEach((inputChar) => {
        if (!standardAlphabet.includes(inputChar)) {
          result.push(inputChar);
        } else {
          standardAlphabet.forEach((standardAlphaLetter, index) => {
            if (inputChar === standardAlphaLetter) {
              result.push(alphabetArray[index]);
            }
          });
        }
      });
      return result.join("");
    } else {
      inputArray.forEach((inputChar) => {
        if (!alphabetArray.includes(inputChar)) {
          result.push(inputChar);
        } else {
          alphabetArray.forEach((alphabetArrayChar, index) => {
            if (inputChar === alphabetArrayChar) {
              result.push(standardAlphabet[index]);
            }
          });
        }
      });
      return result.join("");
    }
  }
  return { substitution };
})();

module.exports = { substitution: substitutionModule.substitution };
