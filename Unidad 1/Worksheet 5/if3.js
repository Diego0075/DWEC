var edad= prompt("¿Cual es tu edad?");

if(Number(edad)== edad){
    if(edad <= 5){
        alert("Debes estar en jardín de infancia")
    }else{
        if(edad >=6 && edad <=11){
            alert("Debes estar en primaria")
        }else{
            if(edad >=12 && edad<=16 ){
                alert("Debes estar en la ESO")
            }else{
                if(edad >=17 && edad <=21){
                    alert("Debes estar en Bachiller o FP")
                }else{
                    if(edad > 21){
                        alert("Debes estar en la Universidad")
                    }
                }
            }
        }
    }
}