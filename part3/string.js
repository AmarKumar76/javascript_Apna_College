let msg = " hello world ";
console.log(msg);
password = prompt("set the password");
console.log(password.trim());
// 2nd method
console.log(msg.toUpperCase());
console.log(password.toLowerCase());
//3rd method
let str = "ilovecoding";
let a =str.indexOf("love");
console.log(a);
// it is called method chaining
console.log(msg.trim().toUpperCase());
// 4rd method  slice () return a part of original string as a new string;
let text = "i am amar kumar verma";
console.log(text.slice(3 , 7));
console.log(text.replace("kumar","verma"));
msg.repeat(5);