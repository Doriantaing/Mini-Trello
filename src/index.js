import 'flexboxgrid';
import 'bulma/css/bulma.css'
import './styles/styles.scss';


var dom = {
    menuLine: document.querySelectorAll('.header__menuLine'),
    menu: document.querySelector('.header__menu'),
    offCanvas: document.querySelector('.header__offCanvas')
}


for (let i = 0; i < dom.menuLine.length; i++) {
    menuHover(i);
    menuClick(i);
}

function menuHover(e) {
    dom.menu.addEventListener('mouseover', function () {
        dom.menuLine[e].style.width = "25px";
    });

    dom.menu.addEventListener('mouseleave', function () {
        dom.menuLine[e].style.width = "";
    });
}

function menuClick(a) {
    dom.menu.addEventListener('click', function () {
        dom.offCanvas.classList.toggle('openCanvas');
        dom.menuLine[a].classList.toggle('openMenu');
    });
    
}
