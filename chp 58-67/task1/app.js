function aa(){
//1 Get element of id “main-content” and assign them in a variable
var main = document.getElementById('main-content');
var first = document.getElementById('first-name');
var last = document.getElementById('last-name');
var email = document.getElementById('email');
//2 Display all child elements of “main-content” element
console.log(main.childNodes);
//3 Get all elements of class “render” and show their innerHTML in browser.
var render0 = document.getElementsByClassName('render')[0];
var render1 = document.getElementsByClassName('render')[1];
var render2 = document.getElementsByClassName('render')[2];
var render3 = document.getElementsByClassName('render')[3];
var render4 = document.getElementsByClassName('render')[4];
document.write(render0.innerHTML);
document.write(render1.innerHTML);
document.write(render2.innerHTML);
document.write(render3.innerHTML);
document.write(render4.innerHTML);
//4 Fill input value whose element id first-name using javascript
render0.innerText = "First Name : "+ first.value;
//5 Repeat part iv for id ”last-name” and “email
render1.innerText = "Last Name : "+last.value;
render2.innerText = "Email : "+email.value; 



}