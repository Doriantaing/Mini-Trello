import 'flexboxgrid';
import 'bulma/css/bulma.css'
import './styles/styles.scss';


var dom = {
    menuLine: document.querySelectorAll('.header__menuLine'),
    menu: document.querySelector('.header__menu'),
    offCanvas: document.querySelector('.header__offCanvas'),
    boardList: document.querySelector('.board__list'),
    card : document.querySelector('.board__card'),
    addList: document.querySelector('.board__headerImg'),
    listTitle: document.querySelector('.board__listTitle'),
    changeTitle: document.querySelector('.board__listTitleChange'),
}


// Header 

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


// Add List 


dom.addList.addEventListener('click',function(){
    createList();
})

function createList(){
  var list = document.createElement('div');
  list.classList.add('board__listContainer');
  dom.boardList.appendChild(list);

  var title = document.createElement('h4');
  title.classList.add('board__listTitle');
  title.innerHTML = "name";
  list.appendChild(title);

  var addCard = document.createElement('img');
  addCard.classList.add('board__cardAdd');
  addCard.src= "img/plus.svg";
  list.appendChild(addCard);

}



dom.listTitle.addEventListener('click',function(){
    dom.listTitle.style.display = "none";
    dom.changeTitle.style.display = "block";
})

dom.changeTitle.addEventListener('submit',function(){
    dom.listTitle.style.display = "block";
    dom.changeTitle.style.display = "none";
})