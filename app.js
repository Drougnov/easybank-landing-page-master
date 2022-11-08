document.documentElement.style.scrollBehavior = "smooth";  //scroll-behavior: smooth;

//toggle hamburger
const body = document.body;
const nav = document.querySelector('nav');
const navMenu = document.querySelector('.nav__menu');
const overlay = document.querySelector('.body__overlay');

navMenu.addEventListener('click',()=>{
    nav.classList.toggle('active');

    if(nav.classList.contains('active')){
        console.log('true')
        overlay.style.background = "hsla(233, 26%, 24%,.8)";
        overlay.style.zIndex = "10";
    }else{
        overlay.style.background = "transparent";
        overlay.style.zIndex = "-1";
    }
})

//