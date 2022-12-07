document.getElementById("nav").onmouseover = function (event) {
    const target = event.target;
    if (target.className === 'menu-item') {
        const s = document.getElementById('main__menu');
        s.style.display = 'block';
    }
}

document.onmouseover = function (event) {
    const target = event.target;

    if (target.className !== 'menu-item' && target.className !== 'main__menu' && target.className !== "menu__a") {
        closeMenu();
    }
}


function closeMenu() {
    const menu = document.getElementsByClassName('main__menu');

    for (let i = 0; i < menu.length; ++i) {
        menu[i].style.display = "none";
    }
}

