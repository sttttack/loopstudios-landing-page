"use strict";

const menuBtn = document.getElementById('menu_btn');
const menuList = document.getElementById('menu_list')



menuBtn.addEventListener('click', (e) => {

   

    var menuItems = document.getElementById('menu_list');
    var conteinerOne = document.querySelector('.conteiner_1');

    if ( menuItems.style.display == '' ) {
        menuItems.style.display = 'block'
        menuBtn.classList.add('change')
        
    } else if (menuItems.style.display == 'block') {
        menuItems.style.display = '';
        conteinerOne.style.display = 'flex'
        menuBtn.classList.remove('change')
    } 


})
