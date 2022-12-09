const menuItems = document.querySelector('.main__menu').getElementsByClassName("menu__a");
for(let i=0; i<menuItems.length; i=i+1){
    if(menuItems[i].href.split("?")[0] === document.location.href.split("?")[0]){
        menuItems[i].className = "menu__active";
        break;
    }
}