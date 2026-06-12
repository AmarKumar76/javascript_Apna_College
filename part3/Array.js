//linear data structure store same data type element
let num = [1,3,4,5,6];
console.log(num);
console.log(num[1]);
//in js different data type can be used in array;
let student = ["amar",34 ,45,'c'];
let n=student.length;
student[0][0];//print a;
//Array are mutable
let fruits = ["mango","apple","banana"];
fruits[1]="lichi";
console.log(fruits);
//Array method 1.push(),.2.unshift(),3.pop(),4.shift();
let car = ["audi","toyota","maruti"];
car.push("ferrari");//add in last position;
console.log(car); 
car.pop();//delete the last position element
car.unshift("xuv");//add the element at the start position;
car.shift()//delete the the element of start position;

// some or array method
car.indexOf("xuv"); // rturn the index of xuv or if npt exit xuv then return return -1;;
car.includes("audi")// give the bollean value if exit in array then return the true and else false;
console.log(car);
let car1 = ["kia",'tata']
car.concat(car1)//join both car and car1 array;
car.reverse() // print the element in reverse ordr;
car.slice(2)//print the element of ahead of a index 2
car.slice(2,6)//print the element of index between 2 and 6;and 6 index element not included;
car.splice(1,)//removes/replace/add/element in place'; give the a new array of delete element;
let arr = [1,4,6,6,8,5,8,]
arr.sort();
car.sort();//soring the car using alphabet;



//array references
// it means address of array
// in javascript array element not store in contiguous 
[1]==[1]; //not equal false
//

/// comstant array
//all opertion kr skte but uska address change nhi kr skte hai or pura arr change nhi kr skte hai;
const arr1 = [1,2,4,5,6,7,8];
arr1.push();

//nested array
//array ke anadar array is called nested array
let numbers = [1.[2,4],[3,6,7],[3,4,57,78,68],2];
console.log(numbers);