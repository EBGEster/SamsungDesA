"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mail = /** @class */ (function () {
    function Mail(tipo, direccion) {
        this._tipo = tipo;
        this._direccion = direccion;
    }
    Object.defineProperty(Mail.prototype, "tipo", {
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
    Object.defineProperty(Mail.prototype, "direccion", {
        get: function () {
            return this._direccion;
        },
        set: function (direccion) {
            this._direccion = direccion;
        },
        enumerable: true,
        configurable: true
    });
    return Mail;
}());
exports.Mail = Mail;
