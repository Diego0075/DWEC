var a = parseInt(prompt("Cuanto vale a"));
var b = parseInt(prompt("Cuanto vale b"));
var c = parseInt(prompt("Cuanto vale c"));

var resulpos = parseInt((-b+(Math.sqrt(Math.pow(b, 2)
                -(4*a*c))))/(2*a));

var resulne = parseInt((-b-(Math.sqrt(Math.pow(b, 2)
                -(4*a*c))))/(2*a));



document.write("Una soluión para X es: " +resulpos);
document.write("Otra solución para x es: " + resulne);


