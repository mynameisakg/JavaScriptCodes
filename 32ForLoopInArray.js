let fruits = ["apple", "mango", "banana", "grapes"];
let newFruits = [];
for(let i=0; i<fruits.length; i++){
    console.log(`${i}`, fruits[i]);
    newFruits.push(fruits[i].toUpperCase());

    console.log(newFruits);
}
console.log(newFruits); 
