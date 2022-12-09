//Examples :- redivider, deified, civic, radar, level, rotor, kayak, reviver, racecar, madam

//Logic
// let myStr = "redivider";
// let first = 0;
// let last = myStr.length - 1;
// for(let i=0 ;i<myStr.length - 1; i++){
//     if(myStr[0] === myStr[myStr.length - 1]){
//         console.log(myStr[i]);
//         first++;
//         last--;
//     }
    
// }

//in terms of arrow function
const isPalindrome = (myStr) => {
    let first = 0;
    let last = myStr.length - 1;
    for(let i=0 ;i<myStr.length - 1; i++){
        if(myStr[0] === myStr[myStr.length - 1]){
            first++;
            last--;
            return true;
        } 
    }
    return false;
}

console.log(isPalindrome("civic"));

