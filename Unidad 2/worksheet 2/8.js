let foto = Math.floor(Math.random() * (3 - 0) + 0); //Creamos la variable foto que genera un numero aleatorio

if(foto == 0){
    document.write("<img src=img/Abascal.jpg width='400'; height='341'></img>")
}

if(foto == 1){
    document.write("<img src=img/Casado.jpg width='400'; height='341'></img>")
}

if(foto == 2){
    document.write("<img src=img/Iglesias.jpg width='400'; height='341'></img>")
}



var numeroAleatorio = Math.floor(Math.random()*(3)+1);
document.write("<img src=\"images/"+numeroAleatorio+".png\">");