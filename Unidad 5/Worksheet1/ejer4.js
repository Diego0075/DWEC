window.onload = function(){
    limpiar();
    document.getElementById("añadir").addEventListener("click", meterLista);
}


function meterLista(){
    var nuevo = document.getElementById("input").value;

    var sum = document.createTextNode(nuevo);

    var crearLi = document.createElement('li'); //Campo
        crearLi.appendChild(sum);

        var crearUl = document.getElementsByTagName('ul')[0]; //Ul de lista
        crearUl.appendChild(crearLi);

    limpiar();
}

function limpiar(){
    document.getElementById('input').value = "Escribe aqui...";
}