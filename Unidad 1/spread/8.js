function sumAndSquare(...array){
    let suma = 0;  //Creamos la variable suma
    for (numero of array){
        numero = Math.pow(numero, 2); //Se le asigna que todo numero va elevado a 2
        suma += numero; //Casa vez que la variable suma aumenta devielve un numero
    }
    return suma;   //Devuelve el resiltado
}
