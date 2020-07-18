function main() {
  var sub1 = +prompt("Enter Marks for Subject 1"); 
  var sub2 = +prompt("Enter Marks for Subject 2"); 
  var sub3 = +prompt("Enter Marks for Subject 3"); 
  document.write("<h1>Student Marks</h1>");
  document.write("---Subject 1: "+sub1+"<br>");
  document.write("---Subject 2: "+sub2+"<br>");
  document.write("---Subject 3: "+sub3+"<br>");
  document.write("---Average: "+avg(sub1,sub2,sub3)+"<br>");
  document.write("---percentage: "+percentage(sub1,sub2,sub3)+"%");



}
main();



function avg(a,b,c){

  return (a + b + c)/3;

}


function percentage(a,b,c){

 return ((a+b+c)/300)*100;

}