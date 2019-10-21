"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./Persona");
var Direccion_1 = require("./Direccion");
var Telefono_1 = require("./Telefono");
var Mail_1 = require("./Mail");
var dir1 = new Direccion_1.Direccion("aa", 2, 4, "A", 49800, "Toro", "zamora");
var dir2 = new Direccion_1.Direccion("bb", 3, 5, "Q", 49800, "Toboso", "Jaén");
var telf1 = new Telefono_1.Telefono("movil", 656496807);
var telf2 = new Telefono_1.Telefono("fijo", 980692903);
var mail1 = new Mail_1.Mail("personal", "a@a.com");
var mail2 = new Mail_1.Mail("personal", "b@a.com");
var ester = new Persona_1.Persona("ester", "barroso", 30, "45687651Z", "12/10/89", "azul", "mujer", [dir1, dir2], [mail2, mail1], [telf2, telf1], ["a", "b"]);
var odin = new Persona_1.Persona("odin", "cerboso", 1, "5565654S", "15/02/2018", "rojo", "hombre", [dir1], [mail1], [telf1], ["c", "d"]);
var alex = new Persona_1.Persona("alex", "gonzalez", 30, "12345678Z", "29/06/89", "azul", "hombre", [dir2], [mail2], [telf2], ["e", "f"]);
//console.log(ester)
//console.log(odin)
//console.log(alex)
var agenda = [ester, odin, alex];
//console.log(agenda)
var theDni = "45687651Z";
var laPersona = agenda.filter(function (persona) {
    return (persona.dni === theDni);
});
laPersona[0].direcciones.push(new Direccion_1.Direccion("cc", 23, 2, "E", 28035, "Madrid", "Madrid"));
laPersona[0].telefonos.push(new Telefono_1.Telefono("Trabajo", 666333666));
laPersona[0].mails.push(new Mail_1.Mail("Trabajo", "c@c.com"));
console.log(laPersona);
