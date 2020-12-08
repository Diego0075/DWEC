window.onload = function(){
    document.getElementById("boton").addEventListener("click", uploadfich);
}


function uploadfich(){

    var label = document.createElement('label');

    var input = document.createElement('input');

    label.appendChild(input);

    input.type = "file";

    var div = document.getElementsByTagName('div')[0];

    div.appendChild(label);
}