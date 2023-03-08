/*document.querySelector('.theme-button').addEventListener('click', () => {
    var body = document.querySelector('html');
    console.log('click');
    var contactItems = document.querySelectorAll('.contact-items');
    var contactSvg = document.querySelectorAll('.social-images');
    if (body.getAttribute('data-bs-theme') == 'dark') {
        body.setAttribute('data-bs-theme', 'light');
        document.getElementById('btnSwitch').textContent = "Switch to Dark Theme";
        for (var i = 0; i < contactItems.length; i++) {
            contactItems[i].classList.add('border-dark');
            contactItems[i].classList.remove('border-white');
            contactSvg[i].setAttribute('fill', '#343a40');
        }

    }
    else {
        body.setAttribute('data-bs-theme', 'dark');
        document.getElementById('btnSwitch').textContent = "Switch to Light Theme";
        for (var i = 0; i < contactItems.length; i++) {
            contactItems[i].classList.add('border-white');
            contactItems[i].classList.remove('border-dark');
            contactSvg[i].setAttribute('fill', '#fff');
        }


    }
});*/

/* Typed.js */

var typed1 = new Typed(".mov", {
    strings: ["developer ^2000", "designer ^2000"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

/* Navbar */

var navbar = document.getElementById('navbar');
window.onscroll = function () {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 1000) {
        navbar.classList.add('bg-body-tertiary');
    } else if (window.pageYOffset < 1000) {
        navbar.classList.remove('bg-body-tertiary');
    }
}
  

document.querySelectorAll('.blast').forEach(el => {
    el.addEventListener('mouseenter', function() {
        
        setTimeout(() => {
            el.classList.remove('rubberBand', 'animated')
        }, 1000);
        el.classList.add('rubberBand', 'animated');
    })
    
  })


socialImage = document.querySelectorAll('.contact-img');
socialImage.forEach(element => {
    element.addEventListener('mouseenter', function(){
        element.classList.add('fill-changer');
    });
    element.addEventListener('mouseleave', function(){
        element.classList.remove('fill-changer')
    });
});