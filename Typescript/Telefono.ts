export class Telefono {

    private _tipo: string;
    private _numero: number;

    constructor(tipo: string, numero: number) {
        this._tipo = tipo;
        this._numero = numero;
    }

    //getters

    get tipo(){
        return this._tipo
    }
    get numero(){
        return this._numero
    }

    //setters

    set tipo(tipo: string){
        this._tipo = tipo
    }
    set numero(numero: number){
        this._numero = numero
    }
}