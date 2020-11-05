var texto = prompt("Escribe lo que quieras: ");

function minymayusc(cad_arg){
    let min=0;
    let may=0;

    for(let i= 0;i<cad_arg.length;i++){   //El for recorre nuesta cadena de caracteres
        if(cad_arg.charAt(i) == cad_arg.charAt(i).toLowerCase()) //Aquí si detecta en nuestra acdena una minuscula la variable minuscula suma
            min++;
        else
            may++;
    }
    if(min && may)
        return "El texto contiene tanto mayusculas como minusculas";
    else if(may)
        return "El texto contiene solo mayusculas";
            return "Contiene solo minusculas";
}


document.write(minymayusc(texto));