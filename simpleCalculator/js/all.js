let calculator = document.querySelectorAll('.calculator-input');
let totalId = document.getElementById('total');
let addId = document.getElementById('add');
let cutId = document.getElementById('cut');
let multId = document.getElementById('mult');
let divisId = document.getElementById('divis');

addId.addEventListener('click',addFu);
cutId.addEventListener('click',cutFu);
multId.addEventListener('click',multFu);
divisId.addEventListener('click',divisFu);

function addFu(){
    let str ='';
    calculator.forEach(element => {
        str += parseFloat(element.value);
    });
    console.log(parseFloat(str));
    totalId.innerHTML = parseFloat(calculator[0].value)+parseFloat(calculator[1].value);
}

function cutFu(){
    totalId.innerHTML = parseFloat(calculator[0].value)-parseFloat(calculator[1].value);
}

function multFu(){
    totalId.innerHTML = parseFloat(calculator[0].value)*parseFloat(calculator[1].value);
}

function divisFu(){
    totalId.innerHTML = parseFloat(calculator[0].value)/parseFloat(calculator[1].value);
}