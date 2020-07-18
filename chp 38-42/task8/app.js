function distance(){
var km = +prompt("Enter Distance Between two Cities in Km to convert in various units");
document.write("Distance Between Two Cities in KiloMeters = " +km+" Km<br>");
document.write("Distance Between Two Cities in Meters = " + meters(km)+" M<br>");
document.write("Distance Between Two Cities in Feets = " + feets(km)+" Ft<br>");
document.write("Distance Between Two Cities in Inches = " + inches(km)+" In<br>");
document.write("Distance Between Two Cities in Centimeteres = " + centimeters(km)+" Cm<br>");
}
distance();

function meters(km){
return km * 1000;


}

function feets(km){

  return km * 3281;
}

function inches(km){
  return km * 39370;
}
function centimeters(km){
return km * 100000;

}