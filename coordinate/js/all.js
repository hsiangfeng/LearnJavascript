let el = document.getElementById('app');
let mouseImg = document.querySelector('.mouseImg');

el.addEventListener('mousemove', mouseFu)

function mouseFu(e) {
    //screenDOM
    let screenXId = document.getElementById('screenX');
    let screenYId = document.getElementById('screenY');
    //pageDOM
    let pageXId = document.getElementById('pageX');
    let pageYId = document.getElementById('pageY');
    //clienDOM
    let clientXId = document.getElementById('clientX');
    let clientYId = document.getElementById('clientY');
    //依照瀏覽器(螢幕)外的整體高度(screen)
    screenXId.textContent = e.screenX;
    screenYId.textContent = e.screenY;
    //網頁畫面(page)
    pageXId.textContent = e.pageX;
    pageYId.textContent = e.pageY;
    //瀏覽器視窗(client)
    clientXId.textContent = e.clientX;
    clientYId.textContent = e.clientY;
    //讓圖片跟著滑鼠動
    mouseImg.style.left = e.clientX + 'px';
    mouseImg.style.top = e.clientY + 'px';
}

