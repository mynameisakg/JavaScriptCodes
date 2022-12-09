const key = "email";
let personObj = {
    name:"Ankush",
    age:33,
    "person hobbies":["photography","coding","learning"]
}

// personObj.key="ankushergupta@gmail.com"; //it will only keep the key as key instead of email.

console.log(personObj);
personObj["email"]="ankushergupta@gmail.com"; 

console.log(personObj);

console.log(personObj["person hobbies"]); // (.)dot operator can't be used here coz the space between person and hobbies.