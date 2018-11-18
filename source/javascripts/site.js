// declaring DOM variables
let menu_btn, menu, li_one, li_two, li_three, li_four, nav, div_form, about_header, bar_first, bar_second, bar_third, bar_fourth, bar_fifth, bar_sixth

// setting DOM variables and event listeners when the browser has been loaded
window.onload = function() {
    bar_1 = document.querySelector('#bar_1')
    bar_2 = document.querySelector('#bar_2')
    bar_3 = document.querySelector('#bar_3')
    bar_4 = document.querySelector('#bar_4')
    bar_5 = document.querySelector('#bar_5')
    bar_6 = document.querySelector('#bar_6')
    bar_7 = document.querySelector('#bar_7')
    bar_8 = document.querySelector('#bar_8')
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
        bar_1.style.width = '60px'
        bar_2.style.width = '60px'
        bar_3.style.width = '40px'
        bar_4.style.width = '20px'
        bar_5.style.width = '40px'
        bar_6.style.width = '20px'
        bar_7.style.width = '20px'
        bar_8.style.width = '20px'
    }, 500)

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