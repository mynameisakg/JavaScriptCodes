//let keyword
//declare variables with let keyword

let firstName = "Ankush";
console.log(firstName);

// let firstName = "Ankita";   //Uncaught SyntaxError: Identifier 'firstName' has already been declared 
console.log(firstName);

/**
 * 1)let was introduced in 2015 with ES6. let doesn't allow declaring the
 *   same variable name twice unlike var.
 * 2)In case of for loop if you use var, it will be accessible out of for loop also,
 *   and hence we use let in such case so that scope of let is inside for loop only.
 */
