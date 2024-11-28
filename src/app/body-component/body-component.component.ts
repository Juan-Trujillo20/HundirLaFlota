import { Component } from '@angular/core';
import { Barco } from '../../models/Barco';
import { Tablero } from '../../models/Tablero';
import { Coordenadas } from '../../models/Coordenadas';


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

disparo( i:number, j:number) {
  console.log(i + " " + j);
  this.tablero[i][j].url="img\\casilla.png";
}

}
