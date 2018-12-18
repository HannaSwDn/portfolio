// declaring DOM variables
let menu, li_one, li_two, li_three, li_four, li_five, nav

// setting DOM variables and event listeners when the browser has been loaded
window.onload = function() {
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
        setTimeout(function() { window.open('index.html', '_self') }, 520);
    })

    li_two.addEventListener('click', event => {
        closeMenu()
        setTimeout(function() { window.open('about.html', '_self') }, 520);
    })

    li_three.addEventListener('click', event => {
        closeMenu()
        setTimeout(function() { window.open('projects.html', '_self') }, 520);
    })

    li_four.addEventListener('click', event => {
        closeMenu()
        div_form.style.display = 'block'
        setTimeout(function() { div_form.style.opacity = '1' }, 20);
    })

    li_five.addEventListener('click', event => {
        closeMenu()
    })

    document.addEventListener('scroll', event => {
        let offset = window.pageYOffset
        menu.style.top = offset + 'px'
        nav.style.top = offset + 'px'
    })
}

const openMenu = () => {
    menu.style.display = 'block'
    setTimeout(function(){ menu.style.width = 'calc(100vw - 75px)' }, 100);
}

const closeMenu = () => {
    menu.style.width = '0vw'
    setTimeout(function(){ menu.style.display = 'none' }, 520);
}