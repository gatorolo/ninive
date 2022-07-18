
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu');

btnMenu.addEventListener('click', function(){
    menu.classList.toggle('mostrar')
});


function vermas(id){
    if(id=="mas"){
    document.getElementById("desplegar").style.display="block";   
    document.getElementById("mas").style.display="none"; 
    }
    else{
    document.getElementById("desplegar").style.display="none";
    document.getElementById("mas").style.display="block";
    }
    }