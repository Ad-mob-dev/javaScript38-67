function overtime(){
var emp =1;
var ot,ovpay;
document.write("<h4>Employee OverTime Pay Calculator</h4>")
while(emp <= 10){
var whours = +prompt("Enter Working Our For Employee to count its OverTime Pay");
if(whours > 40){

ot = whours - 40;
ovpay = ot * 12;
document.write("Employee : "+emp+" overtime pay is : " +ovpay +"RS <br>");

}else{

document.write('Employee : '+emp+" need to work for more than 40 hours to get overTime <br>");


}

emp++;
}

}

overtime();