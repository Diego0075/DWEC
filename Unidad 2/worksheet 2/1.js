var min = parseInt(prompt("Introduzca el valor minimo: "));
var max = parseInt(prompt("Introduzca el valor maximo: "));


var ale= Math.floor(Math.random()*(200-100)+100);

var alepropio = Math.floor(Math.random()*(max-min)+min);


document.write("<br>Numero aleatorio (100 y 200): " +ale);
document.write("<br>Numero aleatorio (ha introducido el usuario): " +alepropio);