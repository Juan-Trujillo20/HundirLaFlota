import { Coordenadas } from "./Coordenadas";

export class Barco{
    tamano: number;
    tocado: number;
    hundido: boolean;
    coordenadas: Coordenadas[];

    constructor(tamano: number,
        tocado: number,
        hundido: boolean,
        coordenadas: Coordenadas[]){
            this.tamano = tamano;
            this.tocado = tocado;
            this.hundido = hundido;
            this.coordenadas = coordenadas;
        }
}