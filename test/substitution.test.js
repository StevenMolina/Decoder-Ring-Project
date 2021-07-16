const { substitution } = require("../src/substitution.js");
const expect = require("chai").expect;

describe("substitution function", () => {
  it("should be set to encode, no spaces applied, no capital letters", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    expect(actual).to.eql(expected);
  });

  it("should be set to encode, will return false if duplicate letters are inputted", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzippp");
    const expected = false;
    expect(actual).to.eql(expected);
  });

  it("should return false if number of characters input is less than 26", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnv");
    const expected = false;
    expect(actual).to.eql(expected);
  });

  it("should be set to encode, and maintain spaces", () => {
    const actual = substitution(
      "you are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.eql(expected);
  });

  it("should be set to decode, no spaces applied", () => {
    const actual = substitution(
      "jrufscpw",
      "xoyqmcgrukswaflnthdjpzibev",
      false
    );
    const expected = "thinkful";
    expect(actual).to.eql(expected);
  });
});
