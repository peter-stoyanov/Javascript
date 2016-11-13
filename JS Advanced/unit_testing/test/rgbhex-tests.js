var chai = require("C:/Users/pesho/node_modules/chai");
var expect = require("C:/Users/pesho/node_modules/chai").expect;
var rgbToHexColor = require("../rgbhex").rgbToHexColor;

describe("rgbToHexColor(red, green, blue)", function() {
  describe("Nominal cases (valid input)", function() {
    it("should return #FF9EAA on (255, 158, 170)", function() {
      var hex = rgbToHexColor(255, 158, 170);
      expect(hex).to.be.equal('#FF9EAA');
    });
    it("should return #0C0D0E on (12,13,14)", function() {
      var hex = rgbToHexColor(12,13,14);
      expect(hex).to.be.equal('#0C0D0E');
    });
    it("should return #FFFFFF on (255, 255, 255)", function() {
      var hex = rgbToHexColor(255, 255, 255);
      expect(hex).to.be.equal('#FFFFFF');
    });
  });
  describe("Special cases (invalid input)", function() {
       it("should return undefined on ((-1, 0, 0), (0, -1, 0), (0, -1, 0))", function() {
       var hex = rgbToHexColor((-1, 0, 0), (0, -1, 0), (0, -1, 0));
       expect(hex).to.be.an('undefined');
     });
     it("should return undefined on ((256, 0, 0), (0, 256, 0), (0, 0, 256))", function() {
     var hex = rgbToHexColor((256, 0, 0), (0, 256, 0), (0, 0, 256));
     expect(hex).to.be.an('undefined');
   });
        it("should return undefined on ((3.14, 0, 0), (0, 3.14, 0), (0, 0, 3.14))", function() {
        var hex = rgbToHexColor((3.14, 0, 0), (0, 3.14, 0), (0, 0, 3.14));
        expect(hex).to.be.an('undefined');
     });
      it("should return undefined on ((3.14, 0, 0), (0, 3.14, 0), (0, 0, 3.14))", function() {
      var hex = rgbToHexColor((3.14, 0, 0), (0, 3.14, 0), (0, 0, 3.14));
      expect(hex).to.be.an('undefined');
     });
     // it("should return undefined on ("", [3], {})", function() {
     // var hex = rgbToHexColor("5", [3], {8:9});
     // expect(hex).to.be.an('undefined');
     // });
     it("should return undefined on ()", function() {
     var hex = rgbToHexColor();
     expect(hex).to.be.an('undefined');
     });
  });
});
