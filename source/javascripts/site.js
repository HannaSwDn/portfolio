// declaring DOM variables
let menu_btn, menu, li_one, li_two, li_three, li_four, nav, div_form, about_header, bar_first, bar_second, bar_third, bar_fourth

// setting DOM variables and event listeners when the browser has been loaded
window.onload = function() {
    bar_first = document.querySelector('#bar_first')
    bar_second = document.querySelector('#bar_second')
    bar_third = document.querySelector('#bar_third')
    bar_fourth = document.querySelector('#bar_fourth')
    about_header = document.querySelector('#about_me_header')
    div_form = document.querySelector('#message')
    nav = document.querySelector('#nav')
    menu = document.querySelector('#menu')
    li_one = document.querySelector('#li-one')
    li_two = document.querySelector('#li-two')
    li_three = document.querySelector('#li-three')
    li_four = document.querySelector('#li-four')
    li_five = document.querySelector('#li-five')
    li_six = document.querySelector('#li-six')

    setTimeout(function() {
        bar_first.style.width = '60px'
        bar_second.style.width = '60px'
        bar_third.style.width = '40px'
        bar_fourth.style.width = '40px'
    }, 1000)

    nav.addEventListener('click', event => {
        openMenu()
    })

    li_one.addEventListener('click', event => {
        closeMenu()
        setTimeout(function() { window.open('index.html', '_self') }, 320);
    })

    li_two.addEventListener('click', event => {
        closeMenu()
        setTimeout(function() { window.open('about.html', '_self') }, 320);
    })

    li_three.addEventListener('click', event => {
        closeMenu()
        setTimeout(function() { window.open('projects.html', '_self') }, 320);
    })

    li_four.addEventListener('click', event => {
        closeMenu()
        div_form.style.display = 'block'
        setTimeout(function() { div_form.style.opacity = '1' }, 10);
    })

    li_five.addEventListener('click', event => {
        closeMenu()
        setTimeout(function() { window.open('cv.html', '_blank') }, 320);
    })

    li_six.addEventListener('click', event => {
        closeMenu()
    })

    document.addEventListener('scroll', event => {
        let offset = window.pageYOffset
        menu.style.top = offset + 'px'
        div_form.style.top = offset + 'px'
        console.log(offset)

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
    setTimeout(function(){ menu.style.height = '100vh' }, 10);
}

const closeMenu = () => {
    menu.style.height = '0vh'
    setTimeout(function(){ menu.style.display = 'none' }, 300);
}