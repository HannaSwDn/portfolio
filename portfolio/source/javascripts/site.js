// setting DOM variables when the browser has been loaded
window.onload = function() {
    const menu_btn = document.getElementById('menu_btn')
    const menu = document.querySelector('#menu')

    menu_btn.addEventListener('click', event => {
        menu.style.display = 'block'
    })
}