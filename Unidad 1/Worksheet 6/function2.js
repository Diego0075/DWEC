function addOnlyNums(...arguments){
    let suma = 0;
    
    for(let i = 0; i <= arguments.length-1;i++){
        if( typeof arguments[i] == 'number'){
            suma = suma+arguments[i];
            document.write("<p>" +sumatotal+  "</p>");
        }
    }
    
}

addOnlyNums(5,5,'paco',2,6,9,8,'rata');