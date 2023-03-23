// ---------Js for Preloader-----------
const preloader = document.getElementById("preloader");
window.addEventListener("load", function(){
    preloader.style.display = "none";
});

// -----------AOS property----------- 
AOS.init({
    offset: 500,
    duration: 600
})

// ---------Js for Auto Close dropdown menu----------- 
const navLinks = document.querySelectorAll('.autoClose')
const menuToggle = document.getElementById('navbarText')
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

const width = window.innerWidth;
console.log(width);

if (width <= 980) {
    navLinks.forEach((l) => {
        l.addEventListener('click', () => { bsCollapse.toggle() })
    })
}

// -----------Js for Navbar Scroll Animation-----------
// window.addEventListener("scroll", function(){
//     var header = document.querySelector(".navbar");
//     var logo = document.querySelector(".navbar-logo");
//     header.classList.toggle("sticky", window.scrollY > 0);
//     logo.classList.toggle("fixLogo", window.scrollY > 0);
// })

var prevScrollpos = window.pageYOffset;
var navbar = document.querySelector(".navbar");
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        navbar.style.opacity = "1";
        navbar.style.top = "0";
    } else {
        navbar.style.opacity = "0";
        navbar.style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}

// console.log(prevScrollpos);
// console.log(currentScrollPos);