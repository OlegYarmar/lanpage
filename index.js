let name = prompt('Как тебя зовут?');
alert(`Привет ${name} !`); 

function sum(){
    var a = parseInt(document.getElementById('a1').value);
    var b = parseInt(document.getElementById('a2').value);
    var sum = a + b;
    document.getElementById("displaysum").innerHTML = "Ответ: " + sum;
}

function Ploshad() {
    var storona1 = parseInt(document.getElementById("storona1").value);
    var storona2 = parseInt(document.getElementById("storona2").value);
    var storona3 = parseInt(document.getElementById("storona3").value);
    var l = (storona1 + storona2 + storona3) / 2;
    var Otvet = Math.sqrt(l * ((l - storona1) * (l - storona2) * (l - storona3)));

    document.getElementById("otvetPlosh").innerHTML = "Ответ: " + Otvet;
}

var winD = document.getElementById("winD");

var click = document.getElementById("date");
    
var cls = document.getElementsByClassName("close")[0];
    
click.onclick = function() {
    winD.style.display = "block";
}
    
cls.onclick = function() {
    winD.style.display = "none";
}

function Data(){
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    var jDate = new Date();
    var TekDate = jDate.getDate() + " " + months[jDate.getMonth()] + " " + jDate.getFullYear();
    setTimeout(() => {
        document.getElementById("datevr").innerHTML = "Текущая дата: " + TekDate;
      }, "100");
}

    
window.onclick = function(event) {
    if (event.target == winD) {
        winD.style.display = "none";
    }
}

function test(){
    task_1 = 'язык программирования';
    task_2 = 'number';
    task_3 = 'bigint';
    task_4 = 'null';
    task_5 = 'hello Oleg';
    task_6 = 'ECMAScript' ;
    task_7 = 'boolean';
    task_8 = 'object';
    task_9 = 'undefined';
    task_10 = 'строка';
    check1 = document.getElementById('Otvet1').value;
    check2 = document.getElementById('Otvet2').value;
    check3 = document.getElementById('Otvet3').value;
    check4 = document.getElementById('Otvet4').value;
    check5 = document.getElementById('Otvet5').value;
    check6 = document.getElementById('Otvet6').value;
    check7 = document.getElementById('Otvet7').value;
    check8 = document.getElementById('Otvet8').value;
    check9 = document.getElementById('Otvet9').value;
    check10 = document.getElementById('Otvet10').value;
    score = 0;
    if(check1 == task_1){
        score +=1;
    }
    if(check2 == task_2){
        score +=1;
    }
    if(check3 == task_3){
        score +=1;
    }
    if(check4 == task_4){
        score +=1;
    }
    if(check5 == task_5){
        score +=1;
    }
    if(check6 == task_6){
        score +=1;
    }
    if(check7 == task_7){
        score +=1;
    }
    if(check8 == task_8){
        score +=1;
    }
    if(check9 == task_9){
        score +=1;
    }
    if(check10 == task_10){
        score +=1;
    }

    Itog = (score/10) * 100;
    document.getElementById('ItogTesta').innerHTML = "Тест пройден на "+Itog+" процентов!";
    }
