var index = 0;
function add(){
      var name = document.getElementById("Name");
      var cls = document.getElementById("Claxx");
       var main = document.getElementById("main");
      var table = document.getElementById("table");
      var cap = document.getElementById("cap");
      var htr = document.getElementById("htr");
      var form = document.getElementById("form");
      var addbtn = document.getElementById("addbtn");
      var tr = document.createElement("tr");
      var tdindx = document.createElement("td");
      var td = document.createElement("td");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
      var td4 = document.createElement("td");
      var btn = document.createElement("button");
      var btn1 = document.createElement("button");
      var btn2 = document.createElement("button");
form.style.display ="block";
addbtn.style.display = "inline-block";
table.style.display = "inline-block";
      btn.innerText = "Delete";
      btn1.innerText = "Edit";
      btn2.innerText = "Add New";
table.style.border = "1px solid white";
table.style.backgroundColor = "black"
table.style.color = "white";
table.style.width = "100%";
td.style.width = "40%";
td1.style.width = "15%";
td2.style.width = "15%";
td3.style.width = "15%";
td4.style.width ="15%";
tdindx.style.border ="1px solid white";
td.style.border ="1px solid white";
td1.style.border ="1px solid white";
td2.style.border ="1px solid white";
td3.style.border ="1px solid white";
td4.style.border ="1px solid white";


      td.innerText = name.value;
      td1.innerText = cls.value;
      tdindx.innerText = index++;
      name.value = "";
      cls.value = "";
      htr.style.display = "table-row";
      cap.style.display = "table-caption";
      htr.style.border = "1px solid white";
      cap.style.border = "1px solid white";

      // add new btn
      btn2.addEventListener("click", function(){
form.style.display = "block";
addbtn.style.display = "inline-block";
name.value = "";
cls.value = "";
});
      
      td2.appendChild(btn);
      td3.appendChild(btn1);
      td4.appendChild(btn2);
      tr.appendChild(tdindx);
      tr.appendChild(td);
    tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      table.appendChild(tr);     
      main.appendChild(table);

      // delete btn
     btn.addEventListener("click",function(){ 
          tdindx.innerText = index;
            table.removeChild(tr);   
            if(tr.rowIndex < 0){
                  htr.style.display = "none";
                  cap.style.display = "none";
                  form.style.display = "block";
                  addbtn.style.display ="inline-block";

            }    
      
     });
      
    
// edit btn
     btn1.addEventListener("click",function(){ 
   form.style.display = "block";
   btn1.disabled = true;
   name.value = td.innerText;
   cls.value = td1.innerText;
   addbtn.style.display = "none";

  
   var sav = document.createElement("button");
    sav.innerHTML ="save";
   
      form.after(this.appendChild(sav));

//     save btn
    sav.addEventListener("click", function(){
td.innerText = name.value;
td1.innerText = cls.value;

btn1.disabled = false;
form.style.display = "none";
sav.style.display = "none"; 
addbtn.style.display = "none";
form.removeChild(sav);

    } );

     });
     form.style.display="none";
     addbtn.style.display="none";

}     