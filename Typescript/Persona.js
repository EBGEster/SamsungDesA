"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumple, color, sexo, direcciones, mails, telefonos, notas) {
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
        this._notas = notas;
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        //getters
        get: function () {
            return this._nombre;
        },
        //setters
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellidos", {
        get: function () {
            return this._apellidos;
        },
        set: function (apellidos) {
            this._apellidos = apellidos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (edad) {
            this._edad = edad;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "dni", {
        get: function () {
            return this._dni;
        },
        set: function (dni) {
            this._dni = dni;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "cumple", {
        get: function () {
            return this._cumple;
        },
        set: function (cumple) {
            this._cumple = cumple;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (sexo) {
            this._sexo = sexo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "direcciones", {
        get: function () {
            return this._direcciones;
        },
        set: function (direcciones) {
            this._direcciones = direcciones;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "mails", {
        get: function () {
            return this._mails;
        },
        set: function (mails) {
            this._mails = mails;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "telefonos", {
        get: function () {
            return this._telefonos;
        },
        set: function (telefonos) {
            this._telefonos = telefonos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "notas", {
        get: function () {
            return this._notas;
        },
        set: function (notas) {
            this._notas = notas;
        },
        enumerable: true,
        configurable: true
    });
    return Persona;
}());
exports.Persona = Persona;
