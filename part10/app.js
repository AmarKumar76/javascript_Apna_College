let btn = document.querySelector("button");
console.log(btn)
// btn.onclick =function(){
//     alert("button was clicked");
// };
function sayhello(){
    alert("hello");
}
// btn.onclick = sayhello;
// btn.onmouseenter = sayhello;

// lecture 3
 btn.addEventListener("click" , sayhello);
 btn.addEventListener("click" , sayhello);

 // activity
 