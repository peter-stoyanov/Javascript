// var myMap = new Map();
//
// var keyString = "a string",
//     keyObj = {},
//     keyFunc = function () {};
//
// // setting the values
// myMap.set(keyString, "value associated with 'a string'");
// myMap.set(keyObj, "value associated with keyObj");
// myMap.set(keyFunc, "value associated with keyFunc");
//
// console.log(myMap.size); // 3
//
// // getting the values
// console.log(myMap.get(keyString));
// console.log(myMap);
// myMap.get(keyObj);       // "value associated with keyObj"
// myMap.get(keyFunc);      // "value associated with keyFunc"
//
// myMap.get("a string");   // "value associated with 'a string'"
//                          // because keyString === 'a string'
// myMap.get({});           // undefined, because keyObj !== {}
// myMap.get(function() {}) ;// undefined, because keyFunc !== function () {}

var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");
for (var [key, value] of myMap) {
    console.log(key + " = " + value);
}
// 0 = zero
// 1 = one

for (var key of myMap.keys()) {
    console.log(key);
}
// 0
// 1

for (var value of myMap.values()) {
    console.log(value);
}
// zero
// one

for (var [key, value] of myMap.entries()) {
    console.log(key + " = " + value);
}
// 0 = zero
// 1 = one

myMap.forEach(function(value, key) {
    console.log(key + " = " + value);
});
// Will show 2 logs; first with "0 = zero" and second with "1 = one"

//to array and back

var kvArray = [["key1", "value1"], ["key2", "value2"]];

// Use the regular Map constructor to transform a 2D key-value Array into a map
var myMap = new Map(kvArray);

myMap.get("key1"); // returns "value1"

// // Use the spread operator to transform a map into a 2D key-value Array.
// console.log(uneval([...myMap])); // Will show you exactly the same Array as kvArray
//
// // Or use the spread operator on the keys or values iterator to get
// // an array of only the keys or values
// console.log(uneval([...myMap.keys()])); // Will show ["key1", "key2"]