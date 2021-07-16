const polybiusModule = (function () {
  // create an array called letterKey, where the key is the letter and the value is the number
  const letterKey = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
    i: 42,
    j: 42,
  };

  // create an array called numberKey, where the key is the number and the value is the letter
  const numberKey = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
    42: "(i/j)",
    99: " ",
  };

  function polybius(input, encode = true) {
    // create a new variable called inputLower and set the input to lowercase
    const inputLower = input.toLowerCase();

    // if encode is true, run the following code
    if (encode) {
      // create a new array called result
      const result = [];

      // loop through the inputLower string and set each iteration to idx
      for (idx in inputLower) {
        // create a new variable called character and set it to equal each index of the inputLower string
        //example: if "hello world" is the string, character[0] would = "h", character[1] would = "e", etc.
        const character = inputLower[idx];

        /*
       create a new variable called num
       num will access the letters array and then will match each indivdual character in the string to a key in the array and return the key value
       */
        let num = letterKey[character];
        // if num === undefined, meaning that no key in the letterKey array matches the inputted character, num will equal a space
        if (num === undefined) {
          num = " ";
        }
        // push num to the result array
        result.push(num);
      }
      // push num to the result and join together as a string
      return result.join("");
    } else {
      const result = [];
      // replace any recognized space as the number 99
      input = input.replace(" ", "99");
      //loop through the length of the input array, iterating by 2
      for (let i = 0; i < input.length; i += 2) {
        // check that the input is an even number, if not, returned false
        if (input[i + 1] === undefined) {
          return false;
        }
        //key is equal to the input index plus 1
        const key = input[i] + input[i + 1];
        //push the digit and key index to the results array
        result.push(digits[key]);
      }
      // return results as a string
      return result.join("");
    }
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
