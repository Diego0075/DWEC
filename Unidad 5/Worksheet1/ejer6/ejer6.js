window.onload = function(){
    document.getElementById("anterior").addEventListener("click", anterior);
    document.getElementById("siguiente").addEventListener("click", siguiente);
}

var img = new Array("img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg",);


function insertimg(){
    var recorrer = document.getElementById('img').recorrer;
    var pos = 0;

    for (var i=0; i<img.length; i++){
        if(recorrer == img[i]){
            pos = i;
        }
    }
    return pos;
}

function siguiente(){

}

function anterior(){
    
}
