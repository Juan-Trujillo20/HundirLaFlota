import { Component } from '@angular/core';
import { Barco } from '../../models/Barco';
import { Tablero } from '../../models/Tablero';
import { Coordenadas } from '../../models/Coordenadas';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-body-component',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './body-component.component.html',
  styleUrl: './body-component.component.sass'
})
export class BodyComponentComponent {
[x: string]: any;

  ship:Barco=new Barco(0,1,1,"",[]);
  numeroTocados:number = 0;
  numeroCoordenadas:number = 0;
  general:boolean= true;
  barcos = new Array<Barco>();
  nuevoBarco= [];
  tablero:Tablero[][] = [[new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero, new Tablero, new Tablero],
                         [new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero, new Tablero, new Tablero],
                         [new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero, new Tablero, new Tablero],
                         [new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero, new Tablero, new Tablero],
                         [new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero, new Tablero, new Tablero],
                         [new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero, new Tablero, new Tablero],
                         [new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero, new Tablero, new Tablero],
                         [new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero, new Tablero, new Tablero],
                         [new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero, new Tablero, new Tablero],
                         [new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero, new Tablero, new Tablero],
                         [new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero,new Tablero, new Tablero, new Tablero, new Tablero]];

constructor(){
}
volverGeneral(){
  this.general=true
}
crearBarco(){
  this.general=false;
}
onSubmit(){
  this.ship;
  this.barcos.push(new Barco(this.ship.tamano,this.ship.x,this.ship.y,this.ship.orientacion,[]));
  for(var i=0; i<this.barcos.length;i++){
    console.log(this.barcos[i])
  }

  this.numeroCoordenadas = this.numeroCoordenadas + this.ship.tamano;

  this.ship.x=0;
  this.ship.y=0;
  this.ship.orientacion="";
  this.ship.tamano=0;
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

