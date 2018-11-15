// declaring DOM variables
let menu_btn, menu, li_one, li_two, li_three, li_four, nav, arrows, about_me

let headers = []
headers.push()
// setting DOM variables and event listeners when the browser has been loaded
window.onload = function() {
    about_me = document.querySelector('#about_me')
    arrows = document.querySelectorAll('.arrow')
    nav = document.querySelector('#nav')
    menu = document.querySelector('#menu')
    li_one = document.querySelector('#li-one')
    li_two = document.querySelector('#li-two')
    li_three = document.querySelector('#li-three')
    li_four = document.querySelector('#li-four')
    li_five = document.querySelector('#li-five')

    nav.addEventListener('click', event => {
        openMenu()
    })

    li_one.addEventListener('click', event => {
        closeMenu()
        setTimeout(function() { window.open('index.html', '_self'); }, 820);
    })

    li_two.addEventListener('click', event => {
        closeMenu()
        setTimeout(function() { window.open('about.html', '_self'); }, 820);
    })

    li_three.addEventListener('click', event => {
        closeMenu()
        setTimeout(function() { window.open('projects.html', '_self'); }, 820);
    })

    li_four.addEventListener('click', event => {
        closeMenu()
        setTimeout(function() { window.open('contact.html', '_self'); }, 820);
    })

    li_five.addEventListener('click', event => {
        closeMenu()
    })

    document.addEventListener('scroll', event => {
        let offset = window.pageYOffset
        menu.style.top = offset + 'px'
    })

    document.addEventListener('scroll', event => {
        let offset = window.pageYOffset
        if (offset + 800 >= about_me.offsetTop) {
            about_me.style.color = 'red'
        }
    })
}

const openMenu = () => {
    menu.style.display = 'block'
    setTimeout(function(){ li_one.style.opacity = '1' }, 10);
    setTimeout(function(){ li_two.style.opacity = '1' }, 150);
    setTimeout(function(){ li_three.style.opacity = '1' }, 300);
    setTimeout(function(){ li_four.style.opacity = '1' }, 450);
    setTimeout(function(){ li_five.style.opacity = '1' }, 600);
}

const closeMenu = () => {
    setTimeout(function(){ li_one.style.opacity = '0' }, 10);
    setTimeout(function(){ li_two.style.opacity = '0' }, 150);
    setTimeout(function(){ li_three.style.opacity = '0' }, 300);
    setTimeout(function(){ li_four.style.opacity = '0' }, 450);
    setTimeout(function(){ li_five.style.opacity = '0' }, 600);
    setTimeout(function(){ menu.style.display = 'none' }, 760);
}