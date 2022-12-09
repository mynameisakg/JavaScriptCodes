// Reference kind datatype

let personObj = {
    name:"Ankush",
    age:33,
    hobbies:["photography","coding","learning"]
}
console.log(personObj);
console.log(personObj.hobbies); //value of key/property can be accessed via dot(.)
console.log(personObj["age"]);  //value of key/property can be accessed via brackets also. Just remember to put "" for keys.

/**
 * How to add new key and value to object??
 */

personObj.address = "Marunji";
console.log(personObj);