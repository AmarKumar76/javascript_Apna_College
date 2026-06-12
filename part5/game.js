let max = prompt("enter the maximum number");
//console.log(max);
const random =Math.floor(Math.random() * max)+1;
console.log(random);
let guess = prompt("guess the number");
while(true){
    if(guess == "Quit"){
     console.log("user quit");
     break;
    }
    if(guess == random){
        console.log("you are right ! congrat  random num was ",random);
        break;

    }else if(guess<random){
        guess = prompt("your guess num was too small please try again");
    }
    else{
        guess = prompt("your guess num was too big please try again");
       
    }

    }