// let obj = { name : "SoftUni", age : 3 };
// console.log(obj); // Object {name: "SoftUni", age: 3}
// obj['site'] = "https://softuni.bg";
// obj.age = 10;
// obj["name"] = "Software University";
// console.log(obj); // Object {name: "Software University", age: 10, site: "https://softuni.bg"}
// delete obj.name; // Delete a property
// obj.site = undefined; // Delete a property value
// console.log(obj); // Object {age: 10, site: undefined}
//
// let sofia =
//     { name: "Sofia", lat: 42.696552, long: 23.326011 };
// console.log(Object.keys(sofia)); // ["name", "lat", "long"]
// let emptyObj = { };
// console.log(Object.keys(emptyObj)); // []
//
// console.log(Object.hasOwnProperty('name')); // true
// if (sofia.age === undefined)
//     console.log("Key 'age' does not exist");
// if (sofia.name !== undefined)
//     console.log("Key 'name' exists");


let obj = { name : "SoftUni", age : 3 };
let str = JSON.stringify(obj);
console.log(str); // {"name":"SoftUni","age":3}

let str2 = "{\"name\":\"Nakov\",\"age\":24}";
let obj2 = JSON.parse(str);
console.log(obj2); // Object {name: "Nakov", age: 24}

