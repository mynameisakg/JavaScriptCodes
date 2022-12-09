const singHappyBirthdaySong = () => {
    console.log("Hey!Happy Birthday To You");
 }

 const addTwoPlusFour = () => {
    console.log(2+4);
 }

 const addTwoAndFour = () => {
    return 2+4;
 }
 
 const sum = (num1, num2) => {
    return num1+num2;
 }


const isEven = (num) => {
    // if(num%2 === 0){
    //     return true;
    // }else{
    //     return false;
    // }
    return num%2 === 0 ? true:false;
}

const returnFirstCharacter = (str) => {
    return str[0];
}

const findTargetNum = (arr,num) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i] === num){
            return true;
        } 
    }
    return false;
}

console.log(findTargetNum(["A","B","C"], "D"));
