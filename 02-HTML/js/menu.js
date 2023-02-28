let btnMenu = document.getElementById('btnmenu');
let menu = document.getElementById('menu');

btnMenu.addEventListener('click',function(){
    'use strict';
    menu.classList.toggle('mostrar'); //si tiene la clase se la va a quitar sino tiene la clase se la va a poner
}); //Cuando le de click al btnMenu