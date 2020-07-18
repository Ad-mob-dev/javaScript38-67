
var count = 0;

function inc(){
var counter = document.getElementById('counter');
counter.innerHTML ="Count: "+ ++count;

}

function dec(){
    var counter = document.getElementById('counter');
    counter.innerText = "Count: "+ --count;    

}