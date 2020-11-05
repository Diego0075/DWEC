function combineTwoArrays(arr1, arr2)
{
    let arraygrupal = [...arr1, ...arr2];
    return arraygrupal;
}

let arr1 = ['Diego', 'Javier', 'Gustavo'];
let arr2 = ['Marissa', 'Teodoro', 'Mateo'];

document.write(combineTwoArrays(arr1, arr2));