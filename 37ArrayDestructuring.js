//Array destructuring was introduced in 2015 with ES6
const myArray = ["value1", "value2", "value3", "value4", "value5"];
let variable1 = myArray[0];
let variable2 = myArray[1];
console.log(variable1, variable2)

let[myvar1,myvar2,myvar3] = myArray; 
console.log(myvar1, myvar2, myvar3);

let myNewArray = myArray.slice(2);
console.log(myNewArray);
/**
 * This can be achieved by array destructuring too...
 */
let[myvar4,,myvar5,...mynewarray] = myArray; //skipped value2 to assign value3 to myvar5 and remaining values into mynewarray array.
console.log(myvar4,myvar5, mynewarray);