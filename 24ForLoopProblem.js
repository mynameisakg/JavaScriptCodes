//sum of first n natural numbers

let num = 100;
let total = 0;
for(let i=0; i<=num; i++){
    total = total + i;
}
console.log(`Value of total is ${total}`);
// console.log(`value of i is ${i}`);      //ReferenceError: i is not defined