function notes(){

document.write("<h4>Currency Notes Denomination</h4>")
var amt = +prompt("Enter amount for withdrawal");
var hundreds = parseInt((amt / 100));
var fifties = parseInt((amt % 100)/50);
var tens = parseInt((((amt % 100) % 50)/10));
document.write("you will have "+hundreds+ " Hundred , "+fifties+" fifty , "+tens+ " ten -- Notes ");

}

notes();