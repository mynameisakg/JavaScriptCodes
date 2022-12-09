//undefined
//null

let firstName;
console.log(firstName); //this will print undefined

// can be done with var too.
var lastName;
console.log(typeof(lastName));

//but this can't be done with const. we have to declare as well as initialize the value

// const age;
console.log(typeof(age));  //Missing initializer in const declaration

firstName = "Ankush";
//printing two things at a same time in console
console.log(typeof(firstName), firstName);

let myVariable = null;
console.log(typeof(myVariable)); //Bug in javaScript, coz it shows Object whereas it should show null.

let myNum = 123;
console.log(Number.MAX_SAFE_INTEGER);

console.log("***********************");

let myNumber = 123n;
let myNumber2 = BigInt(13);

console.log(myNumber+myNumber2);
/**
 * Mathematical operations on bigInt can be performed with other BigInt number only
 */

