# Repositorio de Tareas
## Introduccion a la Programacion
### Universidad Galileo

Este repositorio contiene las tareas del curso Introduccion a la Programacion de la Universidad Galileo de Guatemala 2021.

### Unidad 2

El archivo **actividad2.js** contiene el codigo de solucion al problema planteado en la actividad.

```javascript
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
```

Se inician las variables **nombre**, **carnet** y **mes**. El programa recibe la variable mes e imprime en pantalla la estacion del año correspondiente segun el valor de esta. Son 4 estaciones lo que nos deja con 5 posibles salidas 4 + 1 una en caso de dato invalido. Se utlizo **IF ELSE** ya que se debe plantear un rango de valores para cada estacion.