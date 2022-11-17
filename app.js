document.documentElement.style.scrollBehavior = "smooth";  //scroll-behavior: smooth;

const body = document.body;
//preloader
const preloader = document.querySelector('.preloader');
window.addEventListener('load',()=>{
    body.classList.add('preloader-active');
    preloader.style.display = "none";
})


//toggle hamburger
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

// remove box-shadow in laptops and desktops
var x = window.matchMedia("(min-width: 1000px)");
if(x.matches && nav.classList.contains('active')){
    nav.style.boxShadow = "none";
}