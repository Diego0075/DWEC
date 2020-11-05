function suma (...numerosArray)
{
    let total=0;
    for(numero of numerosArray)
        total += numero;
    return total;
}

document.write(suma(1, 9, 20, 105));