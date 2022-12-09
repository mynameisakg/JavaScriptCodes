//array push pop
//array shift unshift

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);

fruits.push("banana");
console.log(fruits);

// console.log(fruits.pop());
let poppedFruit = fruits.pop();
console.log("popped fruit is", poppedFruit);

fruits.unshift("guava");
console.log(fruits);

let removedFruit = fruits.shift();
console.log(removedFruit);

/**
 * 1)push and pop are faster as compared to shift and unshift
 * 2)for shifting and unshifting, array has to shift other element to add a new item or shift index of items after removing
 *   the first one.
 */