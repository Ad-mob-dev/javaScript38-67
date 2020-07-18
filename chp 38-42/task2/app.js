function leapyear() {
  var year = +prompt("Enter Year to check Whether it is leapyear or not"); 
if(year % 4 == 0 || year % 400 == 0){
   alert(year + " is a Leap Year");
}else{
  alert(year + " is not a Leap Year");
}
  
}
leapyear();
