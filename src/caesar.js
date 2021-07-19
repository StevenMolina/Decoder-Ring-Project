const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    if (!encode) shift *= -1
    // create variables
    let shiftedIndexArr = [];
    const letterAsIndexNumArr = [];
    const correctIndexNumArr = [];
    const lowerCaseInput = input.toLowerCase().split("");
    lowerCaseInput.forEach((inputLetter) => {
      if (!alphabet.includes(inputLetter)) {
        letterAsIndexNumArr.push(inputLetter);
      } else {
        alphabet.forEach((alphabetLetter, index) => {
          if (inputLetter === alphabetLetter) {
            letterAsIndexNumArr.push(index);
          }
        });
      }
    });
    letterAsIndexNumArr.forEach((letterIndex) => {
      if (typeof letterIndex === "number") {
        shiftedIndexArr.push(letterIndex + shift);
      } else {
        shiftedIndexArr.push(letterIndex);
      }
      return shiftedIndexArr;
    });
    shiftedIndexArr.forEach((shiftedIndex) => {
      if (typeof shiftedIndex != "number") {
        correctIndexNumArr.push(shiftedIndex);
      } else if (shiftedIndex > 25) {
        correctIndexNumArr.push(shiftedIndex - 26);
      } else if (shiftedIndex < 0) {
        correctIndexNumArr.push(shiftedIndex + 26);
      } else if (shiftedIndex >= 0 && shiftedIndex <= 25) {
        correctIndexNumArr.push(shiftedIndex);
      }
    });
    return correctIndexNumArr.map((indexToLetter) => {
        return typeof indexToLetter != "number" ? indexToLetter : alphabet[indexToLetter];
      }).join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
