import {Direccion} from './Direccion'
import {Telefono} from './Telefono'
import {Mail} from './Mail'

export class Persona {
    private _nombre: string
    private _apellidos: string
    private _edad: number
    private _dni: string
    private _cumple: string
    private _color: string
    private _sexo: string
    private _direcciones: Array<Direccion>
    private _mails: Array<Mail> 
    private _telefonos: Array<Telefono>
    private _notas: Array<string>


    constructor(nombre: string, apellidos: string, edad: number, dni: string,
                cumple: string, color: string, sexo: string, direcciones: Array<Direccion>, 
                mails: Array<Mail>,telefonos: Array<Telefono>, notas: Array<string>) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumple = cumple;
        this._color = color;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas
        
    }

    //setters
    set nombre(nombre: string) {
        this._nombre = nombre
    }
    set apellidos(apellidos: string) {
        this._apellidos = apellidos
    }
    set edad(edad: number) {
        this._edad = edad
    }
    set dni(dni: string) {
        this._dni = dni
    }
    set cumple(cumple: string) {
        this._cumple = cumple
    }
    set color(color: string) {
        this._color = color
    }
    set sexo(sexo: string) {
        this._sexo = sexo
    }
    set direcciones(direcciones: Array<Direccion>) {
        this._direcciones = direcciones
    }
    set mails(mails: Array<Mail>) {
        this._mails = mails
    }
    set telefonos(telefonos: Array<Telefono>) {
        this._telefonos = telefonos
    }
    set notas(notas: Array<string>) {
        this._notas = notas
    }
    
    
    //getters

    get nombre(){
        return this._nombre
    }
    get apellidos(){
        return this._apellidos
    }
    get edad(){
        return this._edad
    }
    get dni(){
        return this._dni
    }
    get cumple(){
        return this._cumple
    }
    get color(){
        return this._color
    }
    get sexo(){
        return this._sexo
    }
    get direcciones(){
        return this._direcciones
    }
    get telefonos(){
        return this._telefonos
    }
    get mails(){
        return this._mails
    }
    get notas(){
        return this._notas
    }
}

