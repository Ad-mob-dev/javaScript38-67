function aa(){
    //1 node type of element having id form-content
var formcontent = document.getElementById('form-content');
var maincontent = document.getElementById('main-content');
var lastname = document.getElementById('lastName');
var email = document.getElementById('email');
document.write("<h3>Task2 DOM</h3>");
document.write("<strong> 1 node type of element having id form-content </strong> <br>");
document.write("form-content --> NodeType = "+formcontent.nodeType);
document.write("<br>");
document.write("form-content --> NodeName = "+formcontent.nodeName);
document.write("<br><br>");

//2 node type of element having id last name and its child node
document.write("<strong>2 node type of element having id last name and its child node </strong><br>");
document.write("LastName --> NodeType = "+lastname.nodeType);
document.write("<br>");
document.write("LastName --> NodeName = "+lastname.nodeName);
document.write("<br>");
document.write("LastName --> child --> NodeType = "+lastname.childNodes[0].nodeType);
document.write("<br>");
document.write("LastName --> child --> NodeName = "+lastname.childNodes[0].nodeName);
document.write("<br> <br>");

// 3 update childNodes of element having id LastName
document.write("<strong> 3 update childNodes of element having id LastName </strong> <br>");
document.write("LastName --> child --> before updation of = "+lastname.childNodes[0].nodeValue);
var c= lastname.childNodes[0].nodeValue = "Adeel";
document.write("<br>");
document.write("LastName --> child --> After update = " +c);
document.write("<br><br>");

//4 Get First and last child of id “main-content”
document.write("<strong> 4 Get First and last child of id main-content </strong> <br>");
document.write("First child of Main Content = "+maincontent.firstChild);
document.write("<br>");
document.write("Last child of Main Content = "+maincontent.lastChild);
document.write("<br> <br>");
//5 Get next and previous siblings of id “lastName”.
document.write("<strong> 5 Get next and previous siblings of id lastName </strong> <br>");
document.write("Next Sibbling of LastName = "+lastname.nextSibling);
document.write("<br>");
document.write("Previous Sibbling of LastName = "+lastname.previousSibling);
document.write("<br> <br>");
//6 Get parent node and node type of element having id “email”

document.write("<strong> 6 Get parent node and node type of element having id email </strong><br>");
document.write("ParentNode of email = "+email.parentNode);
document.write("<br>");
document.write("NodeType of email = "+email.nodeType);



}