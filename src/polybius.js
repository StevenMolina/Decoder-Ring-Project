const polybiusModule = (function () {
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
    const inputLowerCase = input.toLowerCase();
    if (encode) {
      const result = [];
      for (idx in inputLower) {
        const character = inputLower[idx];
        let num = letterKey[character];
        if (num === undefined) {
          num = " ";
        }
        result.push(num);
      }
      return result.join("");
    } else {
      const result = [];
      input = input.replace(" ", "99");
      for (let i = 0; i < input.length; i += 2) {
        if (input[i + 1] === undefined) {
          return false;
        }
        const key = input[i] + input[i + 1];
        result.push(digits[key]);
      }
      return result.join("");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
