class Book {
    constructor( titulo, genero, autor, leido, fecha){
        this.title= titulo;
        this.genre= genero;
        this.author= autor;
        this.read= leido;
        this.date= fecha;
    }
}

class Booklist {
    librosLeidos=0;
    librosSinLeer=0;
    siguiente="";
    actualN=0;
    ultimoLibro="";
    array=[];
    
    leido(){
        this.librosLeidos++;
        if(this.librosSinLeer>0){
            this.librosSinLeer--;
        }
    }
    

    addbook(book){
        this.array.push(book);
        if(book.read==true){
            this.librosLeidos++;
            this.lastBook();
            this.actual();
            this.siguienteLibro();
        } else{
            this.librosSinLeer++;
            this.lastBook();
            this.actual();
            this.siguienteLibro();
        }
    }
    lastBook(){
        for(var i=this.array.length-1;i>=0;i--){
            if(this.array[i].read==true){
                this.ultimoLibro=this.array[i].title;
                break;
            }
        }
        
    }
    actual(){
        for(var i=0; i<this.array.length; i++){
            if(this.array[i].read==false){
                this.actualRead=this.array[i].title;
                this.actualN=i;
                break;
            }
        }
    }
    siguienteLibro(){
        for(var i=0; i<this.array.length; i++){
            if(this.array[i].read==false && i!=this.actualN){
                this.siguiente=this.array[i].title;
                break;
            } else {
                if(i==this.array.length){
                    this.siguiente="no quedan libros sin leer";
                }
            }
        }
    }
    finishCurrentBook(){
        for(var i=0; i<=this.array.lenght-1; i++){
            if(this.array[i].title==this.actualRead){
                this.array[i].read=true;
                this.libroleido++;
                this.librosSinLeer--;
                this.array[i].date=date.now();
                this.ultimoLibro();
                this.siguienteLibro();
                this.actualRead();
                console.log("e");
                break;
            }else{
                console.log("El libro ya esta leido")
            }
        }
    }
}

booklist =new Booklist();


