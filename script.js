

var menu = document.querySelector('.menu-btn');

let isActive =  false

menu.addEventListener('click', () => {
    if(!isActive){
        menu.classList.add("open");
        isActive = true
    }else{
        menu.classList.remove("open");
        isActive = false
    }
})