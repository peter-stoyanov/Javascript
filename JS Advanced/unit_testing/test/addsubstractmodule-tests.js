var chai = require("C:/Users/pesho/node_modules/chai");
var expect = require("C:/Users/pesho/node_modules/chai").expect;
var createCalculator = require("../addsubstractmodule").createCalculator;
//var sum = require("C:/Users/pesho/node_modules/sumarray").sum;

describe("createCalculator()", function() {
  var calc;
  beforeEach(function() {
    calc = createCalculator();
  });

  it("should return 5 after {add 3; add 2}", function() {
    calc.add(3); calc.add(2); var value = calc.get();
    expect(value).to.be.equal(5);
  });

  it("should return 0 after {create}", function() {
       var value = calc.get();
      expect(value).to.be.equal(0);
  });

  it("should return -5 after {-3,-2}", function() {
    calc.subtract(3); calc.subtract(2); var value = calc.get();
    expect(value).to.be.equal(-5);
  });

  it("should return 4.2 after {+5.3 - 1.1}", function() {
    calc.add(5.3); calc.subtract(1.1); var value = calc.get();
    expect(value).to.be.equal(5.3-1.1);
  });

  it("should return 2 after {+10-7+(-2)-(-1)}", function() {
    calc.add(10); calc.subtract('7');
    calc.add('-2'); calc.subtract('-1');
     var value = calc.get();
    expect(value).to.be.equal(2);
  });

  it("should return NaN after {add hello}", function() {
    calc.add('hello');
    var value = calc.get();
    expect(value).to.be.NaN;
  });

  it("should return NaN after {subtract hello}", function() {
    calc.subtract('hello');
    var value = calc.get();
    expect(value).to.be.NaN;
  });

//end of group
});
