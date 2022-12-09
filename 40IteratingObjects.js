//how to iterate through objects

let personObj = {
    name:"Ankush",
    age:33,
    "person hobbies":["photography","coding","learning"]
}

//for in loop
//Object.keys

for(let key in personObj){
    console.log(`${key} : ${personObj[key]}`);
}

console.log(Object.keys(personObj));
console.log(typeof(Object.keys(personObj)));
console.log(Array.isArray(Object.keys(personObj)));

for(let key of Object.keys(personObj)){
    console.log(key, ":" ,personObj[key]);
}