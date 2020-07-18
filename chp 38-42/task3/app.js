function area() {
  var a = +prompt("Enter first side of triangle to find the area of Triangle"); 
  var b = +prompt("Enter first side of triangle to find the area of Triangle"); 
  var c = +prompt("Enter first side of triangle to find the area of Triangle"); 


  var xx = s(a,b,c);
   var ara = Math.sqrt(xx*(xx-a)* (xx-b) * (xx-c));
document.write("Area of a triangle is : "+ara);
}
area();

function s( a,b,c){
  var res = (a+b+c)/2;
  return res;
}