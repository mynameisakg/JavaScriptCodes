"use strict";
//intro to for loop
// print 0 to 9

for(var i = 0; i <= 10; i++){
    console.log(`value of i is ${i}`);
}

i = 20; //even after use strict, we can access i because of using var in for loop. Hence we should use let in case of for loop.
console.log(`value of i is ${i}`);