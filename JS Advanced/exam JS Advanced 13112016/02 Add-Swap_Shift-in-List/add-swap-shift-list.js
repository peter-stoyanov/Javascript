function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}

//require modules
var chai = require("C:/Users/pesho/node_modules/chai");
var expect = require("C:/Users/pesho/node_modules/chai").expect;

describe("CustomList - list of anything", function() {
     var list;
     beforeEach(function() {
          list = createList();
     });
     //creation and existing of methods
     it("should be a function", function() {
       expect(typeof createList).to.equal('function');
     });
     it("should have method add", function() {
       expect(createList().hasOwnProperty('add')).to.equal(true);
     });
     it("should have method shiftLeft", function() {
       expect(createList().hasOwnProperty('shiftLeft')).to.equal(true);
     });
     it("should have method shiftRight", function() {
       expect(createList().hasOwnProperty('shiftRight')).to.equal(true);
     });
     it("should have method swap", function() {
       expect(createList().hasOwnProperty('swap')).to.equal(true);
     });
     it("should have method toString", function() {
       expect(createList().hasOwnProperty('toString')).to.equal(true);
     });


     //functionaality tests with empty list
  it("should return false for empty list", function() {
       let bool = list.swap(1,1);
      expect(bool).to.be.false;
  });
  it("should return emty string for empty list", function() {
       expect(list.toString()).to.equal('');
  });
  it("should return empty string for empty list - shifted Left", function() {
       list.shiftLeft();
       expect(list.toString()).to.equal('');
  });
  it("should return empty string for empty list - shifted Right", function() {
      list.shiftRight();
      expect(list.toString()).to.equal('');
  });


//test method add
it("should have working add method", function() {
     // list = createList();
     list.add(1);
     list.add("two");
     list.add(3);
 expect(list.toString()).to.equal('1, two, 3');
});
it("should have working add method", function() {
     // list = createList();
     list.add(1);
     list.add("two");
     list.add(3);
     list.add(["four"]);
 expect(list.toString()).to.equal('1, two, 3, four');
});

//test shift Left method
it("should have working shiftLeft method - usual case", function() {
     // list = createList();
     list.add(1);
     list.add("two");
     list.add(3);
     list.shiftLeft();
 expect(list.toString()).to.equal('two, 3, 1');
});
it("should have working shiftLeft method - one element", function() {
     list.add(1);
     list.shiftLeft();
 expect(list.toString()).to.equal('1');
});

//test shift Right method
it("should have working shiftRight method - usual case", function() {
     // list = createList();
     list.add(1);
     list.add("two");
     list.add(3);
     list.shiftRight();
 expect(list.toString()).to.equal('3, 1, two');
});
it("should have working shiftRight method - one element", function() {
     list.add(1);
     list.shiftRight();
 expect(list.toString()).to.equal('1');
});

//test swap method
it("should have working swap method - usual case", function() {
     // list = createList();
     list.add(1);
     list.add("two");
     list.add(3);
     list.swap(0,2);
 expect(list.toString()).to.equal('3, two, 1');
});
it("should have working swap method - same index list content", function() {
     // list = createList();
     list.add(1);
     list.add("two");
     list.add(3);
     let bool = list.swap(1,1);
     expect(list.toString()).to.equal('1, two, 3');
});
it("should have working swap method - same index boolean", function() {
     // list = createList();
     list.add(1);
     list.add("two");
     list.add(3);
     let bool = list.swap(1,1);
 expect(bool).to.be.false;
});
it("should have working swap method - non integer index", function() {
     // list = createList();
     list.add(1);
     list.add("two");
     list.add(3);
     let bool = list.swap(1.5,1);
 expect(bool).to.be.false;
});
it("should have working swap method - string index", function() {
     // list = createList();
     list.add(1);
     list.add("two");
     list.add(3);
     let bool = list.swap("two",1);
 expect(bool).to.be.false;
});
it("should have working swap method - negative index", function() {
     // list = createList();
     list.add(1);
     list.add("two");
     list.add(3);
     let bool = list.swap(-10,1);
 expect(bool).to.be.false;
});
it("should have working swap method - too big index", function() {
     // list = createList();
     list.add(1);
     list.add("two");
     list.add(3);
     let bool = list.swap(150,1);
 expect(bool).to.be.false;
});

//testing to string method
it("should have working toString method - usual case", function() {
     // list = createList();
     list.add(1);
     list.add("two");
     list.add(3);
     expect(list.toString()).to.equal('1, two, 3');
});
it("should have working toString method - object", function() {
     // list = createList();
     list.add(1);
     list.add("two");
     list.add(3);
     list.add({prop: "a", prop2: "b"});
     expect(list.toString()).to.equal("1, two, 3, [object Object]");
});
it("should have working toString method - empty list", function() {

     expect(list.toString()).to.equal("");
});


//close of test group - description
});
