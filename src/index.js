document.querySelector('.theme-button').addEventListener('click',()=>{
    var body = document.querySelector('html');
    console.log('click');
    var contactItems = document.querySelectorAll('.contact-items');
    var contactSvg = document.querySelectorAll('.social-images');
    if (body.getAttribute('data-bs-theme')=='dark') {
        body.setAttribute('data-bs-theme', 'light');
        document.getElementById('btnSwitch').textContent="Switch to Dark Theme"; 
        for(var i = 0; i < contactItems.length; i++){
            contactItems[i].classList.add('border-dark');
            contactItems[i].classList.remove('border-white'); 
            contactSvg[i].setAttribute('fill', '#343a40');
        }
         
    }
    else {
        body.setAttribute('data-bs-theme', 'dark');
        document.getElementById('btnSwitch').textContent="Switch to Light Theme";
        for(var i = 0; i < contactItems.length; i++){
            contactItems[i].classList.add('border-white');
            contactItems[i].classList.remove('border-dark');  
            contactSvg[i].setAttribute('fill', '#fff');
        }
        

    }
});

/* Typed.js */

var typed1 = new Typed(".mov", {
    strings: ["developer ^2000", "designer ^2000"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

/* Navbar */

var navbar = document.getElementById('navbar');
var hide = false
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 50){
        if (!hide){
            navbar.classList.remove("bg-body-tertiary");
            hide = true;
        }
    }
    else {
        if (hide) {
            navdar.classList.add("bg-body-tertiary");
            hide = false;
        }
    }
}
