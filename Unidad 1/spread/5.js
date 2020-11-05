function sumEveryOther(...array)
{
    total=0;
    for(i=0; i<array.length; i++){
        if (i%2 == 0)
            total += array[i];
    }
    return total;
}

document.write(sumEveryOther (8,5,2,7,1));
document.write(sumEveryOther (17,6,15));