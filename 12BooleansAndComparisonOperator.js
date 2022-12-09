/**
 * booleans
 * true
 * false
 */
let num = 7;
let num2 = 7;

console.log(num>num2, num<=num2, num<num2, num2==num);

//diff b/w == and ===
console.log(num == num2);
num="7";
console.log(num==num2); // true!!! weird, but this is how it works in JS. Here only the value gets checked but not the datatype.  
console.log(num != num2); //false, coz values are still same and == only focuses on value.

console.log(num === num2); //false, coz diff datatype and === checks both value and datatype
console.log(num !== num2); //true



