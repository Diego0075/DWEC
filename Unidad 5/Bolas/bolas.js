class Pelota{
    constructor(posx,posy,radio,velx,vely,color,contenedor){
        this.posx=posx;
        this.posy=posy;
        this.radio=radio;
        this.velx=velx;
        this.vely=vely;
        this.color=color;

        this.circle=document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.circle.setAttributeNS(null,"cx",this.posx);
        this.circle.setAttributeNS(null,"cy",this.posy);
        this.circle.setAttributeNS(null,"r",this.radio);
        this.circle.setAttributeNS(null,"fill",this.color)
        contenedor.appendChild(this.circle);
    }
    moverPelota(){
      this.posx = this.posx+this.velx;
      this.circle.setAttributeNS(null,"cx", this.posx);
  
      this.posy = this.posy+this.vely;
      this.circle.setAttributeNS(null,"cy", this.posy);

      //Detectar colisiones
      let svg = document.getElementById("svg");
      let tamanoSVG = svg.getBoundingClientRect();
      if (this.posx <=0 || this.posx>=tamanoSVG.width)
        this.velx *= -1;

      if (this.posy <=0 || this.posy>=tamanoSVG.height)
        this.vely *= -1;

    }
  };


window.onload = ()=>{
  let svg= document.getElementById("svg");
   pelota = new Pelota(200,300,10,4,4,"red",svg);
   pelotablack =new Pelota (360,415,10,5,-2,"black",svg);
   pelotayellow = new Pelota(550,200,10,-6,4,"yellow",svg);



setInterval(anima,15);

}

var pelota;

function anima(){
  pelota.moverPelota();
  pelotablack.moverPelota();
  pelotayellow.moverPelota();
}

