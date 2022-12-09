const users = [
    {userId:1, userName:"Ankush", gender:"male"},
    {userId:2, userName:"Ankita", gender:"female"},
    {userId:3, userName:"Nikky", gender:"female"}
]

const[{userName:user1Name},,{gender:user3Gender}]=users; //here user1Name and user3gender are new key names and this is the format we can
console.log(user1Name);                                  //use in JS.once declared this way, you can only use them instead of original keys.
console.log(user3Gender);