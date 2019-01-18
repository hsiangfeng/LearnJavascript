var _data = '';
var xhr = new XMLHttpRequest();
xhr.open('get','https://gank.io/api/random/data/%E7%A6%8F%E5%88%A9/20');
xhr.send(null);
xhr.onload = function(){
    _data = JSON.parse(xhr.responseText);
    randomData()
    randomData2()
}

function randomData(){
    let data = _data.results;
    data.forEach(element => {
        let listId = document.getElementById('list');
        let createHTML = document.createElement('li');
        createHTML.innerHTML = `${element.who} <img src="${element.url}" alt="" srcset="" width="50px"/>`;
        listId.appendChild(createHTML);
    });
}

function randomData2(){
    let data = _data.results;
    let listId = document.getElementById('list2');
    let str = '';
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        str += `<li>${element.who} <img src="${element.url}" alt="" srcset="" width="50px"/></li>`;
        listId.innerHTML = str;
    }
}