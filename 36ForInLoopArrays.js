let fruits = ["apple","banana","grapes","oranges"];
let newFruits = [];

for(let fruit in fruits){
    newFruits.push(fruits[fruit].toUpperCase());
}
console.log(newFruits);

/**
 * Here fruit represents the index.
 */