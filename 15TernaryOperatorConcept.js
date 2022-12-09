let age = 5;
let drink;
if(age>5){
    drink = "coffee";
}else{
    drink = "milk";
}
console.log(drink);

//There is one more way of doing it and that can be done with ternary operators
drink = age>5 ? "coffee" : "milk";
console.log(drink);