//Program for day of week.
let dayNum = +prompt("Enter a number from 0 to 6"); //this works with browser console, not here in vscode
console.log(typeof(dayNum), dayNum);
if(dayNum === 0){
    console.log("It's Sunday!");
}else if(dayNum === 1){
    console.log("It's Monday!");
}else if(dayNum === 2){
    console.log("It's Tuesday!");
}else if(dayNum === 3){
    console.log("It's Wednesday!")
}else if(dayNum === 4){
    console.log("It's Thursday!");
}else if(dayNum === 5){
    console.log("It's Friday!");
}else if(dayNum === 6){
    console.log("It's Saturday!");
}else{
    console.log("Invalid Day!!!")
}


let dayNumber = 3;
switch(dayNumber){
    case 0:
        console.log("It's Sunday!");
        break;
    case 1:
        console.log("It's Monday!");
        break;
    case 2:
        console.log("It's Tuesday!");
        break;
    case 3:
        console.log("It's Wednesday!");
        break;
    case 4:
        console.log("It's Thursday!");
        break;
    case 5:
        console.log("It's Friday!");
        break;
    case 6:
        console.log("It's Saturday!");
        break;
    default:
        console.log("Invalid day!!!");
        break;
}