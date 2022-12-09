/**
 * Falsy values are-
 * false
 * 0
 * ""
 * undefined
 * null
 */

let firstName=null;

if(firstName){
    console.log(`Your firstNAme is ${firstName}`);
}else{
    console.log(`${firstName} is kinda empty`);
}