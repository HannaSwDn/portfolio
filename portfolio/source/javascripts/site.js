// declaring DOM variables
let menu_btn, menu, li_one, li_two, li_three, li_four
// setting DOM variables and event listeners when the browser has been loaded
window.onload = function() {
    menu_btn = document.getElementById('menu_btn')
    menu = document.querySelector('#menu')
    li_one = document.querySelector('#li-one')
    li_two = document.querySelector('#li-two')
    li_three = document.querySelector('#li-three')
    li_four = document.querySelector('#li-four')

    menu_btn.addEventListener('click', event => {
        openMenu()
    })

    li_one.addEventListener('click', event => {
        closeMenu()
        setTimeout(function() { window.open('index.html', '_self'); }, 820);
    })

    li_two.addEventListener('click', event => {
        closeMenu()
        setTimeout(function() { window.open('about.html', '_blank'); }, 820);
    })

    li_three.addEventListener('click', event => {
        closeMenu()
        setTimeout(function() { window.open('projects.html', '_blank'); }, 820);
    })

    li_four.addEventListener('click', event => {
        closeMenu()
        setTimeout(function() { window.open('contact.html', '_blank'); }, 820);
    })
}

const openMenu = () => {
    menu.style.display = 'block'
    setTimeout(function(){ li_one.style.opacity = '1' }, 10);
    setTimeout(function(){ li_two.style.opacity = '1' }, 200);
    setTimeout(function(){ li_three.style.opacity = '1' }, 400);
    setTimeout(function(){ li_four.style.opacity = '1' }, 600);
}

const closeMenu = () => {
    setTimeout(function(){ li_one.style.opacity = '0' }, 10);
    setTimeout(function(){ li_two.style.opacity = '0' }, 200);
    setTimeout(function(){ li_three.style.opacity = '0' }, 400);
    setTimeout(function(){ li_four.style.opacity = '0' }, 600);
    setTimeout(function(){ menu.style.display = 'none' }, 810);
}