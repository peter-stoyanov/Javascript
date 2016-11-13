var chai = require("C:/Users/pesho/node_modules/chai");
var expect = require("C:/Users/pesho/node_modules/chai").expect;
var sum = require("../sumarray").sum;
//var sum = require("C:/Users/pesho/node_modules/sumarray").sum;


describe("sum(arr) - sum array of numbers", function() {
  it("should return 3 for [1, 2]", function() {
    expect(sum([1, 2])).to.be.equal(3);
  });
  it("should return 1 for [1]", function() {
    expect(sum([1])).to.be.equal(1);
  });
  it("should return 0 for empty array", function() {
     expect(sum([])).to.be.equal(0);
});
  it("should return 3 for [1.5, 2.5, -1]", function() {
     expect(sum([1.5,2.5,-1])).to.be.equal(3);
});
  it("should return NaN for invalid data", function() {
     expect(sum(['pesho'])).to.be.NaN);
});
//close of test group - description
});
