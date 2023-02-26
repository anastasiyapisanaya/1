let mobilebtn = document.querySelector('.mobile_menu');
let mobilemenu = document.querySelector('.mobile__menu');


mobilebtn.addEventListener('click', () => {
    mobilemenu.classList.toggle('active');
})