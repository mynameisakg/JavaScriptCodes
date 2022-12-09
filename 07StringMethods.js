//trim()
//toUpperCase()
//toLowerCase()
//slice

let firstName = "     Ankush     ";
console.log(firstName.length);

//just trying to see if the string has changed..
console.log(firstName.trim());  //yay the string has trimmed
//now let me try to print my string again...
console.log(firstName); // whatttt???it is still the same "     Ankush    "

//I have to two options..either reassign the string firstName or create a new string out of old one using trim() method
let newString = firstName.trim(); //chose the second way but reassigning the original was still an option
console.log(newString); // finally...removed all the spaces.

//lets covert the string to upper case
console.log(newString.toUpperCase());

//doesn't mean the string has changed. Strings are immutable.
console.log(newString); //still prints "Ankush"

newString = newString.toUpperCase();
console.log(newString);

console.log(newString.toLowerCase());


//slice method
/**
 * It needs start index and end index
 * Make sure you give last index+1 coz if the last index is 5, slice will go till index 4
 * 
 */

let sliceString = "Ankush";
console.log(sliceString.slice(0,2)) //This will only go upto "n" but not "k"
console.log(sliceString.slice(0,3)) //This will go upto "k" to display "Ank"
console.log(sliceString.slice(1)) //This will slice the first chaarcter at 0th index and go till end of string
