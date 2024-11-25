export class Barco{
    tamano: number;
    tocado: number;
    hundido: boolean;
    coordenada: [];

    constructor(tamano: number,
        tocado: number,
        hundido: boolean,
        coordenada: []){
            this.tamano = tamano;
            this.tocado = tocado;
            this.hundido = hundido;
            this.coordenada = coordenada;
        }
}