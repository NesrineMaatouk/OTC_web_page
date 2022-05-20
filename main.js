var counter=1;
setInterval(function(){
    document.getElementById('radio'+counter).checked=true;
    counter++;
    if(counter>5){
        counter=1;
    }

},5000);


function hideMenu(){
    
    if ( document.getElementById("navmain").style.display=="none"){
       document.getElementById("navmain").style.display="block";
       
           }
    else {
       document.getElementById("navmain").style.display="none";
       
    }
    
}

function scrolll(){
    var left =document.querySelector(".scoll_images");
    left.scrollBy(250,0)
}
function scrollr(){
    var right =document.querySelector(".scoll_images");
    right.scrollBy(-250,0)
}
/*
const h=document.querySelector('.h');
const n=document.querySelector('.n');
h.addEventListener('click',()=>{
    h.classList.toggle("active");
    n.classList.toggle("active");
})
*/

