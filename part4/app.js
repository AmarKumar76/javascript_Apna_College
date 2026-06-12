//loop in js
//repeatation of piece of Code
//syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
//}
for(let i=1;i<=5;i++){
    console.log(i);//print 1 t0 5;
}
// print all odd numbers (1 t0 15);
for(let i=1;i<15;i=i+2){
    
        console.log(i);
}

///infinite loops : - ending condition missing hoga tb code infinite time run hoga
for(let i=1;i>=0;i++){
    //infinite loop;
}

//nested loop 
for(let i=0;i<=3;i++){
    for(let j=0;i<=3;j++){
        console.log(i);
    }
}

//while loop

//syntax
let i=1;
while(i<10){
    console.log(i);
    i++;
}

//favorite movie
 
let favoritemovie = "avatar";
let guess = prompt("enter the movie");
while((guess !=favoritemovie) && (guess!= "quit")){
    console.log("wrong guess! please try again");
}
if(guess == favoritemovie){
    console.log("congrats!!");
}else{
    console.log("you quit");
}

//break :- means stop loop iterate
let j=1;
while(j<10){
    if(j==5){
        break;
    }
    console.log(j);
}

// loops with arrays
let fruits =["mango","banana","litchi","orange"];
for( i=0;i<fruits.length;i++){
    console.log(i ,fruits[i]);
}

// nested loops with nested arrays
let heros = [["ironman","spiderman","thor"],["superman","wonder man","flash"]];
for(i =0;i<heros.length;i++){
    for(j=0;j<heros[i].length;j++){
        console.log(heros[i][j]);
    }
}

//for of loop
//syntax
//for(element of collection){
//do something;
// //}
let num = [2,4,6,7,8,89,456];
for(ele of num){
    console.log(ele);
}

for(i of "apnacollege"){
    console.log(i);
}

/// nested for of loop
let nums = [[34,65,76],[34,75,86],[25,23]];
for(i of nums){
    for(j of i){
        console.log(j);
    }
}

// Todo APP
// 1.list  -to show all todos
// 2.add  - to add to todo
// 3.delete - to delete a tsk
// 4.quit  - to exit the todo;