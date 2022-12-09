const singHappyBirthdaySong = function(){
    console.log("Hey!Happy Birthday To You");
 }

 const addTwoPlusFour = function(){
    console.log(2+4);
 }

 const addTwoAndFour = function(){
    return 2+4;
 }
 
 const sum = function(num1, num2){
    return num1+num2;
 }


const isEven = function(num) {
    // if(num%2 === 0){
    //     return true;
    // }else{
    //     return false;
    // }
    return num%2 === 0 ? true:false;
}

const returnFirstCharacter = function(str){
    return str[0];
}

const findTargetNum = function(arr,num) {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === num){
            return true;
        } 
    }
    return false;
}

console.log(findTargetNum(["A","B","C"], "D"));
