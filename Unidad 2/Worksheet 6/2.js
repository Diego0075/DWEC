document.write("<h4>C)</h4>");

var img = document.getElementsByTagName("img"); //Variable img asignada a los elementos dados en el
document.write(img.length); //Nos devuelve la cantidad de la variable anterior (img)

document.write("<h4>D)</h4>");

var img_id = document.getElementById("el_coletas"); //Cremaos la variable img_id y que nos devuelva el id asociado a la misma
document.write(img_id.id);

document.write("<h4>E)</h4>");

var nenlaces = document.getElementsByTagName("a"); //creamos la variable nenlaces y que nos debuelva la longitud del mismo
document.write(nenlaces.length);

document.write("<h4>F)</h4>");

document.title = "Este Titulo acaba de ser cambiado"; //Le asignamos a document.ttitle su nueva definicion y posteriormente la mostramos
document.write("El titulo acaba de ser Cambiado");