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
//let nombre = prompt("Ingrese su nombre:")
//let apellido = prompt("Ingrese su apellido:")
//let edad = prompt("Ingrese su edad")
//
//
//
//const PERSONA = nombre+" "+apellido
//console.log(PERSONA)
//
//if (PROMEDIO >= 6) {
//    alert ("Estas aprobado")
//} 
//
//if (USUARIO == "admin" && PASSWORD == "123456") {
//    alert ("Bienvenido : " + USUARIO)
//}else{
//    alert ("Usuario o contraseña incorrectos")
//}
//for(let index = 1; index<=30; index++){
//    const RESIDUO = index % 10
//    if(RESIDUO == 0) {
//        break
//    }
//
//    console.log(index+" - "+ index% 10)
//}
//
//let valor = prompt ("Ingrese un dato (ESC para salir)")
//
//while (valor.toUpperCase != "ESC") {
//    alert("El usuario ingresó: " + valor)
//    valor = prompt("Ingrese otro dato")
//}
//
//let seleccionUsuario = parseInt(
//    prompt(
//        "Que desea pedir: \n 1. Hamburguesa \n 2. Tacos"
//    )
//)
//
//switch (seleccionUsuario){
//    case 1:
//        alert("Selecciono una hamburguesa")
//    break
//    case 2:
//        alert("Usted selecciono Tacos")
//    break
//    default:
//        alert("Opción desconocida")
//    break
//}
//
//function sumar (n1, n2, n3) {
//    let suma = n1 + n2 + n3
//    alert("La suma es " + suma)
//}
//let n1 = parseFloat(prompt("Ingrese el primer número"))
//let n2 = parseFloat(prompt("Ingrese el segundo número"))
//let n3 = parseFloat(prompt("Ingrese el tercer número"))
//
//sumar (n1, n2, n3)
let valorUno = prompt ("ingrese el primer valor")
let valorDos = prompt ("Ingrese el segundo valor")
const suma = (valorUno, valorDos) => valorUno + valorDos

alert("La suma es " + suma)