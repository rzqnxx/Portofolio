/*==== On Scroll ====*/
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        navbar.classList.add("shadow");
        navbar.classList.add("bg-white");
        navbar.classList.remove("mt-4");
    } else {
        navbar.classList.remove("shadow");
        navbar.classList.remove("bg-white");
        navbar.classList.add("mt-4");
    }
}
/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    //Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset:true,
})

/*SCROLL HOME*/
sr.reveal('.home_text',{})
sr.reveal('.home_text2',{delay: 200})
sr.reveal('.home_img2',{delay: 400})
sr.reveal('.desc',{delay: 600})
sr.reveal('.desc2',{delay: 600})
sr.reveal('.mt-5',{delay: 800})

/*SCROLL ABOUT*/
sr.reveal('.img-about',{})
sr.reveal('.text-about',{interval: 400})

/*SCROLL SKILLS*/
sr.reveal('.skills_subtitle',{})
sr.reveal('.skills_text',{delay: 200})
sr.reveal('.skills_data',{interval: 200})
sr.reveal('.skills_img',{delay: 400})

/*SCROLL SERVICE*/
sr.reveal('.one',{interval: 400})

/*SCROLL CONTACT*/
sr.reveal('.icon',{interval: 200})
sr.reveal('.text',{interval: 200})
sr.reveal('.form-control',{interval: 500})

/*SCROLL FOOTER*/
sr.reveal('.footer_icon',{interval: 600})
