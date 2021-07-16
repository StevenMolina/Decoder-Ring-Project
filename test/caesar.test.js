const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("caesarModule", () => {
  it("should return false if the shift value is equal to 0", () => {
    const expected = false;
    const actual = caesar("thinkful", 0);
    expect(actual).to.eql(expected);
  });

  it("should return false if the shift value is less than -25", () => {
    const expected = false;
    const actual = caesar("thinkful", -26);
    expect(actual).to.eql(expected);
  });

  it("should return false if shift value is greater than 25", () => {
    const expected = false;
    const actual = caesar("thinkful", 26);
    expect(actual).to.eql(expected);
  });

  it("should return false if shift no value is given", () => {
    const expected = false;
    const actual = caesar("thinkful");
    expect(actual).to.eql(expected);
  });

  it("should ignore capital letters", () => {
    const expected = "wklqnixo";
    const actual = caesar("ThInkfUl", 3);
    expect(actual).to.equal(expected);
  });

  it("should handle shifts that wrap around end of the alphabet", () => {
    const expected = "iwxczuja";
    const actual = caesar("thinkful", 15);
    expect(actual).to.equal(expected);
  });
});
