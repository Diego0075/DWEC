document.write("<table cellspacing='2' border='1px solid black'>", "<tr>"); //Creamos la tabla y añadimos una fila de celdas
document.write("<td>Nombre del navegador (code)</td>"); //code del navegador
document.write("<td>"+ navigator.appCodeName +"</td>"); //nos lo da
document.write("</tr>");
document.write("<tr>");
document.write("<td>Nombre del navegador</td>");
document.write("<td>"+ navigator.appName +"</td>"); //nombe del navegador 
document.write("</tr>");
document.write("<tr>");
document.write("<td>Versióbn del navegador</td>");
document.write("<td>"+ navigator.appVersion +"</td>"); //version del navegador
document.write("</tr>");
document.write("<tr>");
document.write("<td>Estaddo de Cookies</td>");
document.write("<td>"+ navigator.cookieEnabled +"</td>"); //cookies estado
document.write("</tr>");
document.write("<tr>");
document.write("<td>Platforma</td>");
document.write("<td>"+ navigator.platform +"</td>"); //plataforma?
document.write("</tr>");
document.write("<tr>");
document.write("<td>Agente del navegador</td>");
document.write("<td>"+ navigator.userAgent +"</td>"); //agente del navegador
document.write("</tr>");
document.write("<tr>");
document.write("<td>Lenguaje</td>");
document.write("<td>"+ navigator.language+"</td>"); //lenguaje del navegador
document.write("</tr>");
document.write("</table>");