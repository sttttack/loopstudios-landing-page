"use strict";

const burgerMenu = document.querySelector('.menu');
const navMenu = document.querySelector('.list')

burgerMenu.addEventListener('click', (event) => {
    navMenu.classList.toggle('list')

})