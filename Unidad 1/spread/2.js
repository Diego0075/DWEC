function addOnlyNums(...array)
{
    let total=0;
    for(numero of array){
        if (typeof(numero)=='number') 
            total += numero;

    }
    return("El resultado de la suma es:"+total);
}

document.write(addOnlyNums ( 1 , 'paquito' , 3 , 4 ));