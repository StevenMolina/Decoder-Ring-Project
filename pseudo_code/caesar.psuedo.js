// create a variable called caesarModule that contains a function
const caesarModule = (function () {
  // create a variable called alphabet and push into an array using .split
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function caesar(input, shift, encode = true) {
    // return false if the shift value is equal to 0, less than -25, greater than 25 or not present
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

    // if encode is false, the shift is multiplied by -1
    if (!encode) shift *= -1;

    // create 3 different arrays called shiftedIndexArr, letterAsIndexNumArr, and correctIndexNumArr
    let shiftedIndexArr = [];
    const letterAsIndexNumArr = [];
    const correctIndexNumArr = [];

    // create a variable called lowerCaseInput to set all inputted letters to lowercase, while pushing into an array using split
    const lowerCaseInput = input.toLowerCase().split("");

    // loop through the lowerCaseInput array and set each iteration to inputLetter
    lowerCaseInput.forEach((inputLetter) => {
      // if no characters from the alphabet array are included in the inputLetter value, push the inputLetter value to the array called letterAsIndexNumArr
      if (!alphabet.includes(inputLetter)) {
        letterAsIndexNumArr.push(inputLetter);

        // loop through the alphabet array and set each iteration to alphabetLetter, and set the index number using index
      } else {
        alphabet.forEach((alphabetLetter, index) => {
          // if inputLetter matches alphabetLetter, push it into the letterAsIndexNumArr array with the corresponding index number
          if (inputLetter === alphabetLetter) {
            letterAsIndexNumArr.push(index);
          }
        });
      }
    });

    // loop through the letterAsIndexNumArr and set each iteration to letterIndex
    letterAsIndexNumArr.forEach((letterIndex) => {
      // if the value of letterIndex is a number, push it into the shiftedIndexArr array and shift it the inputted number of shifts
      if (typeof letterIndex === "number") {
        shiftedIndexArr.push(letterIndex + shift);

        // if the value of letterIndex is not a number, push it into the shiftedIndexArr array
      } else {
        shiftedIndexArr.push(letterIndex);
      }
      return shiftedIndexArr;
    });

    // loop through the shiftedIndexArr array and set each iteration to shiftedIndex
    shiftedIndexArr.forEach((shiftedIndex) => {
      // if the value of shiftedIndex is not a number, push the shiftedIndex value into the correctIndexNumArr array
      if (typeof shiftedIndex != "number") {
        correctIndexNumArr.push(shiftedIndex);

        // otherwise, if the value of shiftedIndex is more than 25, subtract 26 from it and push it into the correctIndexNumArr array
      } else if (shiftedIndex > 25) {
        correctIndexNumArr.push(shiftedIndex - 26);

        // otherwise, if the value of shiftedIndex is more than 0, add 26 to it and push it into the correctIndexNumArr array
      } else if (shiftedIndex < 0) {
        correctIndexNumArr.push(shiftedIndex + 26);

        // otherwise, if the value of shiftedIndex is greater than or equal to 0 and less than or equal to 25, push it to the correctIndexNumArr array
      } else if (shiftedIndex >= 0 && shiftedIndex <= 25) {
        correctIndexNumArr.push(shiftedIndex);
      }
    });

    // return correctIndexNumArr and loop over the array, setting each iteration to indexToLetter
    return correctIndexNumArr
      .map((indexToLetter) => {
        // return the alpahbet array and check if no characters from the alphabet exist, if true, return the value of indexToLetter, if false, return the alphabet character and join as a string
        return typeof indexToLetter != "number"
          ? indexToLetter
          : alphabet[indexToLetter];
      })
      .join("");
  }
  return {
    caesar,
  };
})();
module.exports = { caesar: caesarModule.caesar };
