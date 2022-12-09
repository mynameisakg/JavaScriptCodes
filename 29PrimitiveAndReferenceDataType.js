 let a = 10;
 let b = a;
 console.log(a);
 console.log(b);
 a++;
 console.log(a);
 console.log(b);

 /**
  * 1)primitive data types consume lesser space in memory and hence they are stored as stacks.
  * 2)in the above case after a++, value of a changes but b still remains 10 coz in stack a seperate
  *   memory allocation has been done for storing value of b. once a is changed doesn't mean b will change too.
  */

 let array1 = ["item1", "item2", "item3"];
 let array2 = array1;

 console.log(array1);
 console.log(array2);

 array1.push("item4");

 console.log(array1);
 console.log(array2);
 /**
  * In case of arrays the value of array i.e. ["item1", "item2", "item3"] is stored on heap and the references to it i.e array1
  * and array2 are stored on heap. Both array1 and array2 points to the same array of item on heap, hence any change that is made 
  * on array will be reflected by both the references.
  */
