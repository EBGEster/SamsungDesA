"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Telefono = /** @class */ (function () {
    function Telefono(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    Object.defineProperty(Telefono.prototype, "tipo", {
        //getters
        get: function () {
            return this._tipo;
        },
        //setters
        set: function (tipo) {
            this._tipo = tipo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Telefono.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (numero) {
            this._numero = numero;
        },
        enumerable: true,
        configurable: true
    });
    return Telefono;
}());
exports.Telefono = Telefono;
