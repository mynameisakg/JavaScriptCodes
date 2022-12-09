"use strict";
/**
 * variables can store some information/ data
 * we can use that information later
 * we can change that information later
 */

//declaring variable and storing the information
var firstName = "Ankush";

//using the variable
console.log(firstName);

//changing variable 
firstName = "Ankita";

//using the new variable information
console.log(firstName);

//In the case above we have reassigned the value of firstName variable.

//We can redeclare the firstName too. It is possible in this case.

var firstName = "ankita";  
console.log(firstName);

var lastName = "Gupta";    //ReferenceError: lastName is not defined-----> if we do not use var for declaring variable lastName.
console.log(lastName);     //reference error would not happer if we do not use "use strict"; at the start of program.