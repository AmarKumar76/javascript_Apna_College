// lecture 1
// for each function
let arr = [2, 6, 7,8,5];
let print = function(el){
    console.log(el);
};
arr.forEach(print);

arr.forEach((el)=>{
    console.log(el);
});

//lecture 2;
//map function:- let newarr = arr.map(some fuctiin defubtion or name)
let num = [3,6,7,8,9];
let newnum = num.map((el)=>{
    return el*2;
});
console.log(newnum);

// filter function
let num2 = [2 ,5,6,8,9,20,23,67,87,98];
let ans = num2.filter((el)=>{
    return el%2==0;
})
console.log(ans);

// lecture 3 
// every function :- return true if every element of arrays give true for some function .else returns false.

let arr1 = [1,3,6,56,67,75];
let a = arr.every((ele) => ele%2);
console.log(a);

//next lecture 
// reduce method: reduces the array to a single value;
let res =0;
let finalvalue = arr1.reduce((res,el) => (res+el));
console.log(finalvalue); // output last tk ka element ka sum
//output
// [1,3,6,56,67,75]
// first step  call (0,1) =>0+1=1 and 1 store in res;
// second step  call (1,3) =>1+3 =4  and store in res ;
// second step  call (4,6) =>4+6 =10  and store in res ;
// second step  call (10,56) =>10+56 =66  and store in res ;1

// aage same jayega last element tk;

//and last sb value  print hoga like as 1,4,10,66

//[]

/// next lecture
let arr2 = [2 ,3,45,5,54,34,566,];
//let max=-1;
let max  = arr2.reduce( (max,el) => {
    if(max<el){
        return el;
    }else{
        return max;
    }
});
console.log(max);

// practice question 
// check if all number in our array are multiple of ten
 let nums = [10,20,30,40];
 let anss = nums.every((ele)=>(ele%10==0));
 console.log(anss);
 
 // create a function  ans find minmum element of array
 function  getmin(nums){
 let min = numss.reduce((min,ele) =>{
     if(ele>min){
         return min;
        }else{
            return ele;
        }
    });
    return min;
}
    let numss = [10,20,30,40,50,-33];
    let an = getmin(numss);
    console.log(an);

    // next lecture 
    // default parameter :- giving a default value to the arguments
    function sum(a,b=3){
       return sum = a+b;

    }
    let ae=sum(4);
    console.log(ae);
    

    // spread concept :-Expands an iterable in to multiple
    arr3 = [3,4,56,67,78];
    console.log(Math.min(...arr3)); // spread =...arr this means iterate hoga all element usme jo min hoga u output hoga
    console.log(...arr3);

    //next lecture 
    // spread in array literal
     let arr5 = [3,5,7,8,8,9];
      let newarr = [...arr5];
      let b = newarr.push(10);
      console.log(newarr);

      let chars =[..."amar kumar"];
      console.log(chars);

      let oddarr = [1,3,5,7,9];
      let evenarr = [2,4,6,8];
      console.log([...oddarr,...evenarr]);

      // spread in object litteral
       let student ={
         name: "amar",
         roll: 67,


       };
    
       let studentcopy = { ...student,age:23,country: "india"};
       console.log(studentcopy);

       let ar = [3,6,7];
       let obj = {...ar,3:6}; // in obje index key ban jayega automatically;
       console.log(obj);

       //  rest : - allows a function to take an indefinite number of argument and bundle them in an array or iterable 
       // it is opposite of spread;

       