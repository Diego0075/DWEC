var numhermanos= prompt("¿Cuantos hermanos sois?");
var total= prompt("¿Cual es la cantidad a introducir?");

if(Number(numhermanos)== numhermanos){
    if(numhermanos >= 3){
        document.write("El descuento es de " +total*0.15 +"€")
    }else{
        if(numhermanos >= 1){
            document.write("El descuento es de " +total * 0.05 +"€" )
        }else{
            document.write(total)
        }
    }
}