window.onload = () =>
{
    document.getElementById('gato1').addEventListener("click", sum1);
    document.getElementById('gato2').addEventListener("click", sum2);
    document.getElementById('gato3').addEventListener("click", sum3);
    document.getElementById('gato4').addEventListener("click", sum4);
}


var primero = 0;
var segundo = 0;
var tercero = 0;
var cuarto = 0;

function sum1(){
    primero ++;
    
    document.getElementById('campo1').textContent = primero;
}

function sum2(){
    segundo ++;
    document.getElementById('campo2').textContent = segundo;
}

function sum3(){
    tercero ++;
    document.getElementById('campo3').textContent = tercero;
}

function sum4(){
    cuarto ++;
    document.getElementById('campo4').textContent = cuarto;
}