// let array1 = ["item1", "item2", "item3"];
// let array2 = array1;
/**
 * With above statement the two arrays are excatly the same pointing towards the same array items ["item1", "item2", "item3"]
 * 
 * Let us suppose we want to clone the array instead of pointing to the same reference
 */

// let array1 = ["item1", "item2", "item3"];
// let array2 = ["item1", "item2", "item3"];
/**
 * Above statements will create two different arrays with items ["item1", "item2", "item3"].
 * so any change that we make to array1 will not be reflected in array2. Lets have a look-
 */
// array1.push("item4");
// console.log(array1);
// console.log(array2);
/**
 * The output would something be like-
 * [ 'item1', 'item2', 'item3', 'item4' ]
 * [ 'item1', 'item2', 'item3' ]
 * 
 * we can do it other way to. Lets see-

 */

// let array1 = ["item1", "item2", "item3"];
// let array2 = array1.slice(0); //This slice method used in strings can be used here. will simple give new array from index 0 till end
// console.log(array1);
// console.log(array2);

// let array1 = ["item1", "item2", "item3"];
// let array2 = [].concat(array1);
// console.log(array1);
// console.log(array2);
// console.log(array1 === array2);

let array1 = ["item1", "item2", "item3"];
let array2 = [...array1]; 
console.log(array1);
console.log(array2);
console.log(array1 === array2);

