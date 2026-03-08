const form=document.getElementById("loginForm");
const button=document.getElementById("loginBtn");
const message=document.getElementById("message");

form.addEventListener("submit",(e)=>{

e.preventDefault();

button.innerText="Loading...";
button.disabled=true;

setTimeout(()=>{

button.innerText="Success";
message.innerText="Login Successful!";
message.style.color="green";

},2000);

});