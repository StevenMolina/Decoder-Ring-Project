const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybiusModule", () => {
  it("should encode a given input", () => {
    const expected = "4432423352125413";
    const actual = polybius("thinkful");
    expect(expected).to.equal(actual);
  });

  it("should ignore capital letters", () => {
    const expected = "4432423352125413";
    const actual = polybius("THINKFUL");
    expect(actual).to.equal(expected);
  });

  it("should decode the given input", () => {
    const expected = "hello world";
    const actual = polybius("3251131343 2543241341", false);
    expect(actual).to.equal(expected);
  });

  it("should convert i & j to 42", () => {
    const expected = "4242";
    const actual = polybius("ij");
    expect(expected).to.equal(actual);
  });

  it("when set to decode, 42 should translate to i/j.", () => {
    const expected = "th(i/j)nkful";
    const actual = polybius("4432423352125413", false);
    expect(expected).to.equal(actual);
  });

  it("when set to decode, the length of the string excluding spaces should be even", () => {
    const actual = polybius("44324233521254134", false);
    expect(actual).to.be.false;
  });
});
