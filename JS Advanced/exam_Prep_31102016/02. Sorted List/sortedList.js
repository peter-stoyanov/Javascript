class SortedList {
    constructor() {
        this.list = [];
    }

    add(element) {
        this.list.push(element);
        this.sort();
    }

    remove(index) {
        this.vrfyRange(index);
        this.list.splice(index, 1);
    }

    get(index) {
        this.vrfyRange(index);
        return this.list[index];
    }

    vrfyRange(index) {
        if (this.list.length == 0) throw new Error("Collection is empty.");
        if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
    }

    sort() {
        this.list.sort((a, b) => a - b);
    }

    get size() {
        return this.list.length;
    }
}

module.exports = {SortedList};

var chai = require("C:/Users/pesho/node_modules/chai");
var expect = require("C:/Users/pesho/node_modules/chai").expect;
//var sortedList = require("../sortedList");
//var sortedList = require("C:/Users/pesho/node_modules/SortedList").SortedList;



describe("SortedList - list of numbers", function() {
     var myList;
     beforeEach(function() {
          myList = new SortedList();
     });
     //creation and existing of methods
     it("should be a object", function() {
       expect(typeof SortedList).to.equal('function');
     });
     it("should have method add", function() {
       expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true);
     });
     it("should have method remove", function() {
       expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true);
     });
     it("should have method get", function() {
       expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true);
     });
     it("should have method size", function() {
       expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
     });
     //functionaality tests with empty list
  it("should return 0 for get size after initialize", function() {
    expect(myList.size).to.be.equal(0);
  });
  it("should return error for get(1) after initialize", function() {
    expect(() => myList.get(1)).to.throw(Error);
  });
  it("should return error for remove(1) after initialize", function() {
    expect(() => myList.remove(1)).to.throw(Error);
  });

//test method add
it("should have working add method", function() {
myList.add(9);
 expect(myList.size).to.equal(1);
});
it("should not work with add strign", function() {
 expect(() => myList.add('abc')).to.throw(Error);
});
it("should not work with add object", function() {
 expect(() => myList.add({})).to.throw(Error);
});
it("should not work with add array", function() {
 expect(() => myList.add([1,2])).to.throw(Error);
});

//test remove method
it("should have working add method", function() {
myList.add(9);
myList.remove(0);
 expect(myList.size).to.equal(0);
});

//test sort method
it("should have working sort method", function() {
myList.add(9);
myList.add(8);
myList.add(7);
 expect(myList.get(0)).to.be.equal(7);
});


//close of test group - description
});
