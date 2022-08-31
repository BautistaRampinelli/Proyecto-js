
let nombre = prompt("Ingrese su nombre:")
let apellido = prompt("Ingrese su apellido:")
let carrera = prompt("Ingrese su carrera")
let materia = prompt("Ingrese la materia")

const NUMERO_CALIFICACION = prompt ("Ingrese el número total de calificaciones")

let sumatoria = 0
let promedio = 0

for(let index = 1; index <= NUMERO_CALIFICACION; index++) {
    const CALIFICACION = prompt("Ingrese la calificación: " + index)
    sumatoria = sumatoria + parseFloat(CALIFICACION)
    console.log(sumatoria)
}
const ESP = " "
promedio = sumatoria / NUMERO_CALIFICACION
console.log(promedio)

if (promedio >= 6) {
    alert (nombre + ESP + apellido + ESP + "estudiante de " + carrera + " aprobó " + materia + " con promedio: " + promedio)
}else{
    alert (nombre + ESP + apellido + ESP + "estudiante de " + carrera + " desaprobó " + materia + " con promedio: " + promedio)
}
