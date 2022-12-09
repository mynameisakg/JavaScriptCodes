//basically spreads all the element of object

//revision of spread operator in array
let array1 = [1,2,3];
let array2 = [3,4,5];

let newArr = [...array1, ...array2];
console.log(newArr);

let newarr2 = [..."abc"];
console.log(newarr2); //["a","b","c"] will be the output

console.log("***for Objects***");

const obj = {
    key1 : "value1",
    key2 : "value2"
};

const obj2 ={
    key3 : "value3",
    key4 : "value4"
}

let newobj = {...obj, ...obj2, key1 : "value44"}; //here key1 will ovveride the key1 in obj.
console.log(newobj);

const neobj1 = {..."abcdefghijklmnopqrstuvwxyz"};
console.log(neobj1);
