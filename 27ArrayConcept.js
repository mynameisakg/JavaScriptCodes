//ordered collection of items

let fruits = ["mango", "grapes", "oranges"]
console.log(fruits);
console.log(fruits[1]);

let numArray = [1,2,3,4,5,6];
console.log(numArray)

let mixArray = [1,2,2.3,"String",null,undefined,""];
console.log(mixArray[6]);

let obj = {};

//In order to know if an object is array or not then-
//we can use Array.IsArray(put your array here)

console.log(typeof(fruits));
console.log(Array.isArray(fruits));  //returns a boolean value 