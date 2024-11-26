import { Component } from '@angular/core';
import { Barco } from '../../models/Barco';

@Component({
  selector: 'app-body-component',
  standalone: true,
  imports: [],
  templateUrl: './body-component.component.html',
  styleUrl: './body-component.component.sass'
})
export class BodyComponentComponent {
  barcos = new Array<Barco>();
constructor(){
  this.barcos = [
    {tamano:3, tocado:0, hundido:false, coordenada:[]},
    {tamano:2, tocado:0, hundido:false, coordenada:[]},
    {tamano:1, tocado:0, hundido:false, coordenada:[]},
  ]
}

disparo( i:string, j:number) {
  console.log(i + " " + j)
}

}
