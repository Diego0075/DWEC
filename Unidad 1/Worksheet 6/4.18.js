
var n_colum = prompt("Numero de columnas");
var n_casillas = prompt("Numero de casillas");
var altura = prompt("Altura en px");
var ancho = prompt("Ancho en px");

document.write("<table border='1px solid black' cellspading='2' bgcolor='black'>");
for(let i = 1; i <= n_colum;i++){
    document.write("<tr height='"+ altura +"' bgcolor='white'");
    for(let j = 1; j <= n_casillas;j++){
        document.write("<td width='"+ ancho +"'></td>");
    }
    document.write("</tr>");
}
for(let i = 1; i <= n_colum;i++){
    document.write("<tr height='"+ altura +"' bgcolor='white'");
    for(let j = 1; j <= n_casillas;j++){
        document.write("<td width='"+ ancho +"'></td>");
    }
    document.write("</tr>");
}
document.write("</table>");
