import { Coordenadas } from "./Coordenadas";

export class Barco{
    tamano: number;
    coordenadas: Coordenadas[];
    orientacion: string;
    x:number;
    y:number;

    constructor(tamano:number, x:number, y:number, orientacion:string, coordenadas:Coordenadas[]){
        this.tamano = tamano;
        this.coordenadas = coordenadas;
        this.orientacion=orientacion;
        
        x=x-1;
        y=y-1;

        this.x=x;
        this.y=y;

        for(var i=0; i<tamano;i++){
            if(orientacion==='H'){
                coordenadas.push(new Coordenadas(x+i,y+0));
            }else{
                coordenadas.push(new Coordenadas(x+0,y+i));
            }
        }

        this.coordenadas = coordenadas;
    }

    getX():number{
        return this.x;
    }
    getY():number{
        return this.y;
    }
    getTamano():number{
        return this.tamano;
    }
    getOrientacion():string{
        return this.orientacion;
    }
    setX(x:number){
        this.x=x;
    }
    setY(y:number){
        this.y=y;
    }
    setTamano(tamano:number){
        this.tamano=tamano;
    }
    setOrientacion(orientacion:string){
        this.orientacion=orientacion;
    }
}