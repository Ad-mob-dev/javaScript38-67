
      function display(index){
        var button = document.getElementsByClassName("btn");
        var h = document.getElementsByClassName('h');
        
        for(i=index ; i <= index; i++){
           
           if(i === index && button[i].innerHTML === "Read More"){
            button[index].innerHTML = "Read Less";
            h[index].style.display = "block";
           
           }else{
            button[index].innerHTML = "Read More";
            h[index].style.display = "none";
           
           
           
           }
          
        }
      

    

        
        
              }