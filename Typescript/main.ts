import {Persona} from './Persona'
import {Direccion} from './Direccion'
import {Telefono} from './Telefono'
import {Mail} from './Mail'


let dir1 = new Direccion("aa", 2, 4, "A", 49800, "Toro", "zamora")
let dir2 = new Direccion("bb", 3, 5, "Q", 49800, "Toboso", "Jaén")

let telf1 = new Telefono("movil", 656496807)
let telf2 = new Telefono("fijo", 980692903)

let mail1 = new Mail("personal", "a@a.com")
let mail2 = new Mail("personal", "b@a.com")

let ester = new Persona("ester", "barroso", 30, "45687651Z", "12/10/89", "azul", "mujer", [dir1,dir2], [mail2,mail1], [telf2,telf1], ["a", "b"])
let odin = new Persona("odin", "cerboso", 1, "5565654S", "15/02/2018", "rojo", "hombre", [dir1], [mail1], [telf1], ["c", "d"])
let alex = new Persona("alex", "gonzalez", 30, "12345678Z", "29/06/89", "azul", "hombre", [dir2], [mail2], [telf2], ["e", "f"])

console.log(ester)
console.log(odin)
console.log(alex)


let agenda = [ester, odin, alex]

//console.log(agenda)

let theDni = "45687651Z"
let laPersona = agenda.filter((persona)=> {
    return (persona.dni === theDni)
    
})

//antes de añadir registros
console.log(laPersona)

laPersona[0].direcciones.push(new Direccion("cc", 23, 2, "E", 28035, "Madrid", "Madrid"))
laPersona[0].telefonos.push(new Telefono("Trabajo", 666333666))
laPersona[0].mails.push(new Mail("Trabajo", "c@c.com"))

//después de añadir los 3 registros
console.log(laPersona)