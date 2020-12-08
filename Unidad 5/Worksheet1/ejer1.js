var nLinks = document.getElementsByTagName("a").length;

var ultimo = document.getElementsByTagName("a")[nLinks-1];

var google = document.querySelectorAll('a[href="https://www.google.com/"]').length;

var tercerparrafo = document.getElementsByTagName("p")[2].getElementsByTagName("a").length;


document.getElementById("nLinks").innerHTML = "En total hay "+nLinks+" links";

document.getElementById("ultimo").innerHTML = 'El último enlace es: <a href="'+ultimo+'">'+ultimo+'</a>';

document.getElementById("google").innerHTML = "Hay "+google+ " enlace a Google";

document.getElementById("tercerparrafo").innerHTML = "En el tercer parrafo hay "+tercerparrafo+ " links";


