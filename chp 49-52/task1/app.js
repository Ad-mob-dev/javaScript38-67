function display(){

    var name = document.getElementById('name').value;
    var pass = document.getElementById('pass').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
  if( name === "" || pass === "" || email === "" || number === ""){
alert("Fields are Empty");
  }else{
document.write("<h1> Form Details </h1>");
document.write("Name: "+name + "<br/>" + "Password: " + pass  + "<br/>" + "Email: " + email  + "<br/>" + "Number: " + number +"<br>" );
document.write("<button style='margin-top:30px;'><a href='index.html' style='text-decoration:none;'> Go Back </a> </button>");
  }
}