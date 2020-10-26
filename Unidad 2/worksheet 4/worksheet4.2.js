document.write("<table cellspacing='2' border='1px solid black'>","<tr>"); //Creamos tabla y añadimos fila
document.write("<td>Altura en pantalla</td>"); // Celda altura
document.write("<td>"+ screen.availHeight +"</td>"); //La pedimos altura de pantalla
document.write("</tr>"); //Cerramos fila
document.write("<tr>"); //Nueva fila de celfas
document.write("<td>Ancho en pantalla</td>");
document.write("<td>"+ screen.availWidth +"</td>"); //Pedimos ancho de pantalla
document.write("</tr>");
document.write("<tr>");
document.write("<td>Profundida del color</td>");
document.write("<td>"+ screen.colorDepth +"</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>Profundidad del pixel</td>");
document.write("<td>"+ screen.pixelDepth +"</td>");
document.write("</tr>","</table>"); //Cerramos tabla
