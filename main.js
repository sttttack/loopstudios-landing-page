"use strict";

const menuBtn = document.getElementById('btn_menu');





menuBtn.addEventListener('click', (e) => {

    var menuItems = document.getElementById('xxx');
    var conteinerOne = document.querySelector('.conteiner_1');

    if ( menuItems.style.display === 'none' ) {
        menuItems.style.display = 'block'
        conteinerOne.style.display = 'none'
    } else {
        menuItems.style.display = 'none';
        conteinerOne.style.display = 'flex'
    }
})