var counter=1;
setInterval(function(){
    document.getElementById('radio'+counter).checked=true;
    counter++;
    if(counter>5){
        counter=1;
    }

},5000);

/*
const h=document.querySelector('.h');
const n=document.querySelector('.n');
h.addEventListener('click',()=>{
    h.classList.toggle("active");
    n.classList.toggle("active");
})
*/

