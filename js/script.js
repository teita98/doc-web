let desplegar = document.querySelectorAll('#desplegar');
let oculto = document.querySelectorAll('#oculto');
let mostrarOcultarNav = document.getElementById('mostrarOcultarNav');
let nav = document.getElementById('nav')


let vanDesplegar = true;

vanNav = true;
mostrarOcultarNav.addEventListener('click', function(){
    if (vanNav == true){
        nav.classList.remove('ocultarSeccionNav');
        vanNav = false;
    } else{
        nav.classList.add('ocultarSeccionNav');
        vanNav = true;
    }
})