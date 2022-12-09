let array1 = ["item1", "item2", "item3"];
let array2 = array1.slice(0).concat(["item4", "item5"]);
console.log(array1);
console.log(array2);

let array3 = array1.concat(array2,["item6", "item7"]);
console.log(array3);

let oneMoreArray = ["item8", "item9"]

let array4 = [...array1,["item4", "item5"],...oneMoreArray];
console.log(array4);