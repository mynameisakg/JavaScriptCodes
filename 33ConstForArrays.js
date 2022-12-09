
const fruits = ["apple", "banana", "grapes"];
fruits.push("mango");
console.log(fruits);

fruits = ["pineapple"];
console.log(fruits);  //TypeError: Assignment to constant variable.

/**
 * 1)Always use const for object creation
 * 2)In case above we can perform the array operations coz it is stored in heap but we cannot reassign the array
 *  through a const variable all over again.
 */
