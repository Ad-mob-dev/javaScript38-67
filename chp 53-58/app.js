function mod(){
    var modal = document.getElementById("modal");
    var main = document.getElementById("main");
    var images = ['images/1.jpg',"images/2.jpg","images/3.jpg","images/4.png","images/5.jpg","images/6.jpg","images/7.png","images/8.jpg","images/9.jpg","images/10.jpg","images/11.jpg","images/12.jpg","images/13.jpg","images/14.png","images/15.jpg"];
    var caption= ["Salar de Uyuni, Bolivia The world’s largest salt flat, it creates a mirror effect after the rain","Cinque Terre, Rio Maggiore, Italy The “5 Lands” of colored homes perched on a cliff by the sea.",
    "Blue Lagoon, Iceland Natural thermal hot springs.","Maldives This archipelago is the ultimate tropical island paradise.","Glass Beach, California, USA A beach buried in colorful sea glass.","Santorini, Greece - Iconic blue and white buildings on a cliff by the sea",
"Neuschwanstein Castle, Germany The gorgeous former castle of the king","Aogashima Volcano, Japan A small village living in a volcanic island.","Venice, Italy The city of colorful winding corridors and canals, and good food.","Havasu Falls, Grand Canyon, Arizona, USA In Grand Canyon National Park is this majestic waterfall.",
"Swiss Alps, Switzerland The epic and majestic mountain range.","Iceland A vast winter and a perfect place to watch the aurora.","Positano, Almalfi Coast, Italy Storybook town on a cliff by the sea.","Rio de Janeiro, Brazil The iconic statue overlooking the city.",
"Aansu lake, Pakistan The name Ansoo comes from its tear-like shape "];
    var mI1= document.getElementById("img1");
    
  //dynamic content creation
var span = document.getElementsByClassName("close")[0];
var captionText = document.getElementById("caption");
mI1.style.height = "400px";
var h = document.createElement("h2");
h.innerText = "Beautiful Places in World";
main.appendChild(h);
for(i=0 ;i<images.length ; i++){

var iii = document.createElement("img");
        iii.src = images[i];
        iii.alt = caption[i];
        iii.title = caption[i];
  main.appendChild(iii);      
  iii.style.width ="230px";
  iii.style.height ="230px";
  iii.style.margin = "10px";
  iii.onclick = function(){
    modal.style.display = "block";
    mI1.src = this.src;
    captionText.innerHTML = this.alt;

  }
          }

      
// close btn
    span.addEventListener( "click",function(){
      modal.style.display = "none";

    });
  



}