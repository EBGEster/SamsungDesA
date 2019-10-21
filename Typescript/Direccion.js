"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direccion = /** @class */ (function () {
    function Direccion(calle, numero, piso, letra, cp, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._cp = cp;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    Object.defineProperty(Direccion.prototype, "calle", {
        //getters
        get: function () {
            return this._calle;
        },
        //setters
        set: function (calle) {
            this._calle = calle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (numero) {
            this._numero = numero;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "piso", {
        get: function () {
            return this._piso;
        },
        set: function (piso) {
            this._piso = piso;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "letra", {
        get: function () {
            return this._letra;
        },
        set: function (letra) {
            this._letra = letra;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "cp", {
        get: function () {
            return this._cp;
        },
        set: function (cp) {
            this._cp = cp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "poblacion", {
        get: function () {
            return this._poblacion;
        },
        set: function (poblacion) {
            this._poblacion = poblacion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "provincia", {
        get: function () {
            return this._provincia;
        },
        set: function (provincia) {
            this._provincia = provincia;
        },
        enumerable: true,
        configurable: true
    });
    return Direccion;
}());
exports.Direccion = Direccion;
