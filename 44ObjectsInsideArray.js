const users = [
    {userId:1, userName:"Ankush", gender:"male"},
    {userId:2, userName:"Ankita", gender:"female"},
    {userId:3, userName:"Nikky", gender:"female"}
]

for(let user of users){
    console.log(user);
    console.log(user.userName);
}

const[user1, user2, user3]=users;
console.log(user1.userId);