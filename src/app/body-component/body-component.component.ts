import { Component } from '@angular/core';
import { Barco } from '../../models/Barco';
import { Tablero } from '../../models/Tablero';
import { coordenas } from '../../models/Coordenadas';


@Component({
  selector: 'app-body-component',
  standalone: true,
  imports: [],
  templateUrl: './body-component.component.html',
  styleUrl: './body-component.component.sass'
})
export class BodyComponentComponent {
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

  
  this.barcos = [
    {tamano:3, tocado:0, hundido:false, coordenadas:[]},
    {tamano:2, tocado:0, hundido:true, coordenadas:[]},
    {tamano:1, tocado:0, hundido:false, coordenadas:[]},
  ]
}

disparo( i:number, j:number) {
  console.log(i + " " + j);
  this.tablero[i][j].url="img\\casilla.png";
}

}
