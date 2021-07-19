const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const alphabet = {
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
    const coordinates = {
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
      56: " ",
    };
    const inputToLowerCase = input.toLowerCase();
    if (encode === true) {
      const result = [];
      for (curr in inputToLowerCase) {
        const character = inputToLowerCase[curr];
        let number = alphabet[character];
        if (number === undefined) {
          number = " ";
        }
        result.push(number);
      }
      return result.join("");
    } else {
      const result = [];
      input = input.replace(" ", "56");
      for (let i = 0; i < input.length; i += 2) {
        if (input[i + 1] === undefined) {
          return false;
        }
        const coordKey = input[i] + input[i + 1];
        result.push(coordinates[coordKey]);
      }
      return result.join("");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
