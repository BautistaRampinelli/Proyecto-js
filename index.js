const NUMERO_CALIFICACION = prompt ("Ingrese el número total de calificaciones")

let sumatoria = 0
let promedio = 0

for(let index = 1; index <= NUMERO_CALIFICACION; index++) {
    const CALIFICACION = prompt("Ingrese la calificación: " + index)
    sumatoria = sumatoria + parseFloat(CALIFICACION)
    console.log(sumatoria)
}

promedio = sumatoria / NUMERO_CALIFICACION
console.log(promedio)

if (promedio >= 6) {
    alert ("Está aprobado con promedio: " + promedio)
}else{
    alert ("Está desaprobado con promedio: " + promedio)
}
