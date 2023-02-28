"use strict";

const menuBtn = document.getElementById('menu_btn');



menuBtn.addEventListener('click', (e) => {

    menuBtn.classList.toggle("change");

    var menuItems = document.getElementById('menu_list');
    var conteinerOne = document.querySelector('.conteiner_1');

    if ( menuItems.style.display === 'none' ) {
        menuItems.style.display = 'block'
        conteinerOne.style.display = 'none'
        
    } else {
        menuItems.style.display = 'none';
        conteinerOne.style.display = 'flex'
    }
})
