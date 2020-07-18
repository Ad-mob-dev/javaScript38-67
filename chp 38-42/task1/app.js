function pow(a,b) {
    
    var i  , pw = 1;
    for(i=0 ; i < b ;i++){
    pw = pw * a;
    }
    return pw;

}
var inputa = +prompt("enter Base to find power");
var inputb = +prompt("enter exponent to find power");
document.write("BASE= " +inputa+ " Exponent= " +inputb+ "<br> Power= "+ pow(inputa,inputb));
