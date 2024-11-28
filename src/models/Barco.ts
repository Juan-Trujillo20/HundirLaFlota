export class Barco{
    tamano: number;
    tocado: number;
    hundido: boolean;
    coordenadas: [][];

    constructor(tamano: number,
        tocado: number,
        hundido: boolean,
        coordenadas: [][]){
            this.tamano = tamano;
            this.tocado = tocado;
            this.hundido = hundido;
            this.coordenadas = coordenadas;
        }
}