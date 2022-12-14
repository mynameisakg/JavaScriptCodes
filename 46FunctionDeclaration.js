 function singHappyBirthdaySong(){
    console.log("Hey!Happy Birthday To You");
 }

 singHappyBirthdaySong();
 singHappyBirthdaySong();

 function addTwoPlusFour(){
    console.log(2+4);
 }

 addTwoPlusFour(); //will print 6 but not a reusable function

 function addTwoAndFour(){
    return 2+4;
 }
 const returnedValue = addTwoAndFour();
 console.log(returnedValue);

 function sum(num1, num2){
    return num1+num2;
 }
const addition = sum(9,6);
console.log(`The sum is ${addition}`);


function isEven(num) {
    // if(num%2 === 0){
    //     return true;
    // }else{
    //     return false;
    // }
    return num%2 === 0 ? true:false;
}
console.log("Is it even?", isEven(24));
console.log("Is it even?", isEven(5));
console.log("Is it even?", isEven(69));

function returnFirstCharacter(str){
    return str[0];
}

console.log(returnFirstCharacter("Ankush"));

function findTargetNum(arr,num) {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === num){
            return true;
        } 
    }
    return false;
}

console.log(findTargetNum([1,2,3,4,5], 4));