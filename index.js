

let miProducto

class Producto {
    constructor(nombre, precioVenta, precioCompra, cantidad,) {
        this.nombre = nombre;
        this.precioVenta = precioVenta;
        this.precioCompra = precioCompra;
        this.cantidad = cantidad;
    }
    vender() {
        if (this.cantidad > 0) {
            this.disminuirStock(1);
        } else {
            alert("Sin stock");
        }
    }
    disminuirStock = (cantidadADisminuir) => 
        (this.cantidad = this.cantidad - cantidadADisminuir);
    aumentarStock = (cantidadAAumentar) => 
        (this.cantidad = this.cantidad + cantidadAAumentar);
    disminuirPrecio = (precioADisminuir) => 
        (this.precioVenta = this.precioVenta - precioADisminuir);
    aumentarPrecio = (precioAAumentar) => 
        (this.precioVenta = this.precioVenta + precioAAumentar);
}

function obtenerDatosDeProducto() {
    let nombre = prompt("ingrese el nombre del producto")
    let precioVenta = parseFloat(prompt("Ingrese el precio de venta del producto"))
    let precioCompra = parseFloat(prompt("Ingrese el precio de compra del producto"))
    let cantidad = parseInt(prompt("Ingrese la cantidad de productos"))
    const OBJETO_PRODUCTO = new Producto(nombre, precioVenta, precioCompra, cantidad)
    return OBJETO_PRODUCTO
}

function mostrarMenu() {
    const OPCION = prompt("bienvenido, seleccione una opción (ESC para salir)\n 1. Ingresar datos del producto. \n 2. Aumentar precio del prducto. \n 3. Disminuir precio del producto. \n 4. Aumentar stock. \n 5. Disminuir stock. \n 6. Vender. \n 7. Mostrar información del producto.")
    return OPCION 
}

function convertirObjetoEnTexto(objeto) {
    let texto = ""
    for(let clave in objeto){
        if(typeof objeto[clave] != "function"){
            texto = texto + clave + " : " + objeto[clave] + "\n"
        }
    }
    return texto
}

function procesarInventario() {
    let opcionSeleccionada = mostrarMenu()

    while (opcionSeleccionada?.toLowerCase() != "esc") {
        if(opcionSeleccionada !== ""){
            opcionSeleccionada = parseInt(opcionSeleccionada)
            if(!isNaN(opcionSeleccionada)){
                switch(opcionSeleccionada){
                    case 1:
                        miProducto = obtenerDatosDeProducto()
                        break
                    case 2:
                        const PRECIO_A_AUMENTAR = parseFloat(prompt("Ingrese cuanto quiere aumentar el producto"))
                        miProducto.aumentarPrecio(PRECIO_A_AUMENTAR)
                        break
                    case 3: 
                        const PRECIO_A_DISMINUIR = parseFloat(prompt("Ingrese cuanto quiere disminuir el producto"))
                        miProducto.disminuirPrecio(PRECIO_A_DISMINUIR)
                        break
                    case 4:
                        const AUMENTAR_STOCK = parseInt(prompt("Ingrese la cantidad de productos a agregar"))
                        miProducto.aumentarStock(AUMENTAR_STOCK)
                        break
                    case 5:
                        const DISMINUIR_STOCK = parseInt(prompt("Ingrese la cantidad de productos a disminuir"))
                        miProducto.disminuirStock(DISMINUIR_STOCK)
                        break
                    case 6:
                        miProducto.vender()
                        break
                    case 7:
                        const OBJETO_TEXTO = convertirObjetoEnTexto(miProducto)
                        alert(OBJETO_TEXTO)
                        break
                }
            }else{
                alert("Ingresó una opcion incorrecta")
            }
        }else{
            alert("Seleccione una opción")
        }
        opcionSeleccionada = mostrarMenu()
    }
}


function main() {
    miProducto = obtenerDatosDeProducto()
    procesarInventario()
}

main()
