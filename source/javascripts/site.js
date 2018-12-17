// declaring DOM variables
let menu_btn, menu, li_one, li_two, li_three, li_four, li_five, nav, div_form

// setting DOM variables and event listeners when the browser has been loaded
window.onload = function() {
    div_form = document.querySelector('#message')
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
        div_form.style.top = offset + 'px'

        if (offset + 500 >= about_header.offsetTop) {
            about_header.style.width = '100vw'
            about_header.style.opacity = '1'
        } else {
            about_header.style.width = '0vw'
            about_header.style.opacity = '0'
        }
    })
}

const openMenu = () => {
    menu.style.display = 'block'
    setTimeout(function(){ menu.style.height = '100vh' }, 100);
}

const closeMenu = () => {
    menu.style.height = '0vh'
    setTimeout(function(){ menu.style.display = 'none' }, 520);
}