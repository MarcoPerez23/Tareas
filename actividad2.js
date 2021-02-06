/*  
    Hoja de trabajo No.2 - Conceptos basicos para programar
    Crear un programa que muestre la estacion del año en pantalla
    segun el valor de la variable mes
    al finalizar muestre su carnet y su nombre en pantalla
*/

var nombre = "Marco Antonio Perez Ismatul"
var carnet = 21002527

var mes = 10

if (mes == 12 || mes == 1 || mes == 2) {
    alert("es invierno")
} else if (mes >= 3 && mes <= 5) {
    alert("es primavera")
} else if (mes >= 6 && mes <= 8) {
    alert("es verano")
} else if (mes >= 9 && mes <= 11) {
    alert("es otoño")
} else {
    alert("no es un mes valido")
}

alert("carnet: " + carnet + " nombre: " + nombre)