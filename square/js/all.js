const el = document.querySelectorAll('.box');

const elLen = el.length;

el.forEach((item) => {
    item.addEventListener('mousemove',gameOver);
});

function gameOver(){
    alert("GAME OVER !");
}