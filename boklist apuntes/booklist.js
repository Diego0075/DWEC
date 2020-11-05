class booklist{
    constructor(){
        this.listaLibros = [];
        this.currentBookIndex = 0;

    }
    add(b)
    {
        this.listaLibros.push(b);
    }

    finishCurrentBook(){
        this.listaLibros[this.currentBookIndex].read=true;
        this.listaLibros[this.currentBookIndex].readDate= new readDate;
        if(this.currentBookIndex<this.listaLibros.length-1)
        this.currentBookIndex++
    }

    get currentBook(){
        return this.listaLibros[this.currentBookIndex]
    }

    get librosleidos(){
        return this.listaLibros.filter((book) == book.read).length;
    }
}


class book{
    constructor(t="El Quijote",g="Novela Caballeresca",a="Cervantes"){
        this.title = t;
        this.genre = g;
        this.author = a;
        this.read= false;
        this.date= null;
    }
}