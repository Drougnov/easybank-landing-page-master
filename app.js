document.documentElement.style.scrollBehavior = "smooth";  //scroll-behavior: smooth;

//toggle hamburger
const body = document.body;
const nav = document.querySelector('nav');
const navMenu = document.querySelector('.nav__menu');
const overlay = document.querySelector('.body__overlay');

navMenu.addEventListener('click',()=>{
    nav.classList.toggle('active');

    if(nav.classList.contains('active')){
        nav.style.boxShadow = "0 20px 20px 0 hsla(0, 0%, 0%, .5)";
        overlay.style.background = "hsla(233, 26%, 24%,.5)";
        overlay.style.zIndex = "10";
    }else{
        nav.style.boxShadow = "none";
        overlay.style.background = "transparent";
        overlay.style.zIndex = "-1";
    }
})

//