const menuBtn = document.querySelector('.menu-open-btn');
const navMenuBtn = document.querySelector('.nav-button');
const headerElement = document.querySelector('header');

menuBtn.addEventListener('click', () => {
    navMenuBtn.classList.toggle('nav-button-menu');
    menuBtn.classList.toggle('fa-x');
})



