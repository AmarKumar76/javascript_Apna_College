//this keyword :- this keyword refrers to an objects that ececuting the current  piece of code;
const student3 ={
    name: "amar",
    age: 23,
    eng: 93,
    math: 78,
    phy : 67,
    getavg(){
        console.log(this);
        let avg =(this.eng+this.math+this.phy)/3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

function getAvg(){
   console.log(this);
}

// next lecture 
 // try & catch :-
 // the try statement allows you define a vlock of code to be tested for errors while it is being  executed 
 // the catch statement allows you to define a block of code to be executed ,it an error occurs in the try block

//  console.log(a)// show error

//  console.log("hello");
//  console.log("hello");
//  console.log("hello");
//  console.log(b); // error ke bad code run nhi hoga
//  console.log("hello");
//  console.log("hello");
//  console.log("hello");



 console.log("hello");
 console.log("hello");
 console.log("hello");
 //let b=0;
 try{
 console.log(b); // error ke bad code run nhi hoga
 }
 catch(e){
    console.log("caught an error.... b is not defined");
    console.log(e);
 }
 console.log("hello");
 console.log("hello");
 console.log("hello");

 // next lecture
 // arrow function
 //syntax
 // const function =(arg1 , arg2) =>{function definition}
  const sum =(a,b)=>{ // arrow function hm as variable ka value assign krne ke liye krte ya phir higher function me as argument pass krne ke liye 

    console.log(a+b);
  }
  sum(4,6);
 const cube = (n) => { // in single argument mai parenthsis ke bina chal jayega;
   return n*n*n;
 }
  const hello =()=>{
    console.log("hyy i am amar");
  }
  hello();

  // next lecture
  // In arrow function implicit return
   //syntax;
  // const func = (arg1 , arg2)=>(value)

  const mult = (n)=>(n*n); // ye direct retun value kr deta hai isliye ese implicit return bolte hai
  mult();

//   next lecture
//  set time fuction
//syntax
//setTimeout(function ,timeout)// ye window ka in-built function hai

console.log("hii there ");
setTimeout(()=>{
    console.log("apna college");
},1000);
console.log("welcome to");
console.log("welcome to");
console.log("welcome to");
console.log("welcome to");

// next lecture
// set interval
//syntax
// setInterval(function , interval)//interval mili sec me leta hai
  

let id1=setInterval(()=>{
    console.log("welcome in apnacollege")
},4000);
let id2=setInterval(()=>{
    console.log("welcome in hmaracollege")
},4000);
clearInterval(id1);
clearInterval(id2);

// next lecture
// this keyword in arrow function

const student= {
    name: "amar",
    marks: 67,
    age: 21,
    prop: this,//global scope
    getname: function(){
        console.log(this);
        console.log(this.name);
    },
    getmarks: ()=>{
        console.log(this);//parent scope
        console.log(this.marks); // marks accessible nhi hai
    }
}
student.getname();
student.getmarks();
