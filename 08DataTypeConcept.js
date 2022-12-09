//typeOf operator

let age = 33;
let firstName = "Ankush";
let str = +"27";

console.log(typeof(age));
console.log(typeof firstName); //see I have not used braces "()" after typeof and still getting the correct output

console.log(typeof("Ankush"));
console.log(typeof(33));

//primitive data type
//string
//number
//boolean
//undefined
//null
//BigInt
//Symbol
console.log("*******************");
console.log(typeof(age+""));
console.log(typeof(str));

//one more way of conversion
console.log("*******************")
let newAge = 42;
newAge = String(newAge);
let strAge = "42";
strAge = Number(strAge);

let testString = "Test"; //trying to convert it into number. Need to see the error
testString = Number(testString);
console.log(typeof(testString)); //wow, it prints type as number

console.log(testString+4); //but this prints nan -- Not a number

console.log(typeof(newAge));
console.log(typeof(strAge));
