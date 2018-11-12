// DOM variables
let menu_btn, menu, li_one, li_two, li_three, li_four
// setting DOM variables when the browser has been loaded
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
}

const openMenu = () => {
    menu.style.display = 'block'
    setTimeout(function(){ li_one.style.opacity = '1' }, 10);
    setTimeout(function(){ li_two.style.opacity = '1' }, 200);
    setTimeout(function(){ li_three.style.opacity = '1' }, 400);
    setTimeout(function(){ li_four.style.opacity = '1' }, 600);
}