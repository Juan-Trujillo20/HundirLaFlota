import { Component } from '@angular/core';
import { Barco } from '../../models/Barco';
import { Tablero } from '../../models/Tablero';
import { Coordenadas } from '../../models/Coordenadas';
import { get } from 'node:http';


@Component({
  selector: 'app-body-component',
  standalone: true,
  imports: [],
  templateUrl: './body-component.component.html',
  styleUrl: './body-component.component.sass'
})
export class BodyComponentComponent {

  numeroTocados:number = 0;
  numeroCoordenadas:number = 6;

  barcos = new Array<Barco>();
  tablero:Tablero[][] = [[new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero, new Tablero],
                         [new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero, new Tablero],
                         [new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero, new Tablero],
                         [new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero, new Tablero],
                         [new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero, new Tablero],
                         [new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero, new Tablero],
                         [new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero, new Tablero],
                         [new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero, new Tablero],
                         [new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero, new Tablero],
                         [new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero, new Tablero],
                         [new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero, new Tablero]];
  
constructor(){

  var coordenada1:Coordenadas =  new Coordenadas(1, 2);
  var coordenada2:Coordenadas =  new Coordenadas(2, 2);

  var coordenada3:Coordenadas =  new Coordenadas(5, 3);
  var coordenada4:Coordenadas =  new Coordenadas(5, 4);
  var coordenada5:Coordenadas =  new Coordenadas(5, 5);

  var coordenada6:Coordenadas =  new Coordenadas(3, 3);

  var coordenadasBarco2:Coordenadas[] = [coordenada1,coordenada2];
  var coordenadasBarco3:Coordenadas[] = [coordenada3,coordenada4,coordenada5];
  var coordenadasBarco1:Coordenadas[] = [coordenada6];
  
  this.barcos = [
    {tamano:3, tocado:0, hundido:false, coordenadas:coordenadasBarco3},
    {tamano:2, tocado:0, hundido:true, coordenadas:coordenadasBarco2},
    {tamano:1, tocado:0, hundido:false, coordenadas:coordenadasBarco1},
  ]
}

disparo( j:number, i:number) {
  var tocado:boolean = false;
  console.log(i + " " + j);
  if(this.numeroCoordenadas!==this.numeroTocados){
    if(!this.tablero[j][i].disparo){
      for(let a:number= 0; a<this.barcos.length; a++){
        for(let b:number=0; b<this.barcos[a].coordenadas.length; b++){
          
          if((this.barcos[a].coordenadas[b].x===i && this.barcos[a].coordenadas[b].y===j)){
            tocado = true
            this.tablero[j][i].disparo = true;
            this.tablero[j][i].tocado = true;
            this.tablero[j][i].url = "img\\casilla.png";
            this.numeroTocados++;
          }
        }
      }

      if(!tocado){
        this.tablero[j][i].disparo = true;
        this.tablero[j][i].tocado = false;
        this.tablero[j][i].url = "img\\casilla_vacia.png";
      }

      if(this.numeroCoordenadas===this.numeroTocados){
        alert("HAS GANADO");
      }
    }
  }
}
}

