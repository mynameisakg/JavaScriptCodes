let winningNum = 19;

let userNum = +prompt("Guess a number");
console.log(typeof(userNum), userNum);

if(userNum === winningNum){
    console.log("You guessed the right number");
}else{
    if(userNum < winningNum){
        console.log("Guessed to low");
    }else{
        console.log("Guessed to high");
    }
}