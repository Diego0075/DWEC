function lanzamiento(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  function paresImpares(){
    var pares = Array();
    var impares = Array();
    // Llenamos el array de números aleatorios
    myArray =Array(100).fill().map(() => lanzamiento(1,1000))
    
    // Seleccionamos según par o impar
    myArray.forEach( valor => {
        if (valor%2 == 0)
          pares.push(valor);
        else  
          impares.push(valor);
    });
    return pares.concat(impares);
  
  }
document.write(paresImpares().join(" "));