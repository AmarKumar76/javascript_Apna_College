function hello(){
console.log("Hello world");
}

hello();
hello();
hello();
hello();
hello();

function printname(){
console.log("apna college");
console.log("Amar verma");
}
printname();
printname();


function printtable(){
for(let i=1;i<=5;i++){
console.log(i);
}
}
printtable();
printname();


function isadult(age){
    if(age>=18){
        console.log("adult");
    }else{
        console.log("not adult");
    }
}
isadult(35);
isadult(15);


// practice question : create a function that print the poem
function printpoem(){
    console.log("twinkle twinkle ,little star ");
    console.log("how i wonder what you are ");
}
 printpoem();

 //practice question 2: create a function to roll a 
 // dice  & always display the value of dice(1 t0 6) 

 function rolldice(){
    let rand =Math.floor(Math.random()*6)+1;
    console.log(rand);
 }

 rolldice();
 rolldice();
 rolldice();
 rolldice();

 // next lecture  function with arguments 
 //value we pass to function
 function printinfo(name , age){
    console.log(`${name}'s age is ${age}.`);
 }
 printinfo("amar",32);
 printinfo("sagar" ,45);
 printinfo("sagar" );
 printinfo(45);// store in name variable;


 function sum( num1 ,num2){
    console.log("sum",num1+num2);
 }

 sum(3,5); 
 sum(24,5); 

 // next lecture practice questiom 
 //average of three number
 function average(a,b,c){
    let avg = (a+b+c)/3;
    console.log(avg);
 }
 average(5,5,5);
 average(5,20,10);


 //nexgt
 // practice questiom 
 // create a function that prints the mutilplication table of number
  function multiplicationtable(n){
      console.log("table of",n);
      for(i=n;i<=n*10;i+=n){
        console.log(i);
      }
  }
  multiplicationtable(5);
  multiplicationtable(10);
  multiplicationtable(19);


  // next lecture 
  // about return keyword : means return the value of function
  function sum1(a,b){
    return a+b;
  }
  let t=sum1(3,5);
  console.log(t);
  console.log(sum1(sum1(1,3),67));
  
  //practice questiom 
  // create a function thar retujrn the sum of numbers of numberws form 1 to n
  function sumofN(n){
    let sum =0;
    for(i=0;i<=n;i++){
        sum = sum+i;
    }
    return sum;
  }
  console.log(sumofN(10));
  console.log(sumofN(100));
  console.log(sumofN(1000));


  //next lecture 
  // question :- creat a function that return th concatenation of all string in an array
  function stringconcat(arr){
    let result="";
    for(let i=0;i<arr.length;i++){
    result =result.concat(arr[i]);
    }
    return result;
  }
  let str =["hii","hello","byy",];
 console.log(stringconcat(str));


 //next lecture 
 // scope :-scope determines the accessibility
 //  of variables , obejects and function from different part of code 
 // function scope :- variables defined a function are not accessible from ourside the function
 sum =24 // global scope // isko fuction ke andar use kr skte hai
 function calsum(a,b){
  let sum = a+b; // fuction scope
 }
 calsum(1,3);
 console.log(sum);// not accessible outside the function 

 // next
 // block scope :variable declared inside a { }block cannot be accessed from outside  the block;
 {
  let a=10;
 }
 //console.log(a); // cannot print the value of a;

 //next
 // lexical scope: - a variable  defined oustsidef a function can be accessible incisde another function defined after the variable decalaration;
 // the opposite is not true;
 function outerfunc(){
  let x=8;
  let y=0;
  
  function innerfunc(){ // function scope
    let a =8;
    console.log(x);
    console.log(y);
  }
  console.log(a);// not accessible 
  outerfunc();
 }

 // next  
 // practice question to find the outoput
  let greet = "hello";
  function changeGreet(){
    let greet = "namste";
    console.log(greet);
    function innergreet(){
      console.log(greet);
    }
  }
  // console.greet();
   changeGreet();
   //output 
   //hello
   // namste

   /// next lecture 
   // function expression 
      
   let sum2= function(a,b){
    return a+b;
   }
   console.log(sum2(4,5));

   let hello1 = function(){
    console.log("hello");
   }

   // next lecture 
   // higher order functions
   // defination :- a  function that does one or both 
   // 1.takes one or multiple function as argument 
   //2. returns function

   function multiplegreet(func ,n){
    for(let i=0;i<n;i++){
      func();
    }
   }
   let greets = function(){
    console.log("hello"); /// print 10 time hello;
   }
   multiplegreet(greets ,10);

   // next lecture 
   // return function consept
   
   function oddEvenfactory(request){
    if(request == "odd"){
      let odd = function(n){
      console.log(!(n%2==0));
      }
      return odd;
   }else if(request=="even"){
      let even= function(n){
      console.log((n%2==0));
      }
      return even;
     }else{
      console.log("wrong request");
     }

   }
   let request = "odd" ;
   oddEvenfactory(request);

   //next lecture
   // method : in js method means kisi bhi object ke liye perform krna ho

   const calculator={
     numb: 55,
    add : function(a,b){
      return a+b;
    },
    sub : function(a,b){
      return a-b;
    },
    mult: function(a,b){
      return a*b;
    },
    div : function(a,b){
      return a/b;
    }
    
   };
   console.log(calculator.add(5,6));
   console.log(calculator.sub(5,6));
   console.log(calculator.mult(5,6));


   //method shothand
   const calculator2={
     numb: 55,
    add(a,b){
      return a+b;
    },
    sub(a,b){
      return a-b;
    }
  };
  console.log(calculator.add(5,6));


