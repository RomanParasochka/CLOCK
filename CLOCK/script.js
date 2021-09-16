'use strict'
const burger = document.querySelector('.nav_burger'),
      menu = document.querySelector('.nav_menu'),
      carousels = document.querySelectorAll('.carousel');



burger.addEventListener('click',()=>{
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    burger.classList.contains('active')
    ? carousels.forEach(i=>{i.style.opacity='0';
                            i.style.transition = 'opacity 0.5s ease-in'})
    : carousels.forEach(i=>i.style.opacity='1')
});





