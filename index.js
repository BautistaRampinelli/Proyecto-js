class Producto {
    constructor(id, nombre, cat, precioVenta, precioCompra, cantidad,) {
        this.id = id
        this.nombre = nombre.toUpperCase();
        this.cat = cat
        this.precioVenta = precioVenta;
        this.precioCompra = precioCompra;
        this.cantidad = cantidad;
    }
    calcularCosto = () => this.cantidad * this.precioCompra
}

// Cargar productos
let productos = []

let producto1 = new Producto(1, "TV", "electrodoméstico", 600, 400, 5)
let producto2 = new Producto(2, "Taladro", "herramienta", 200, 140, 12)
let producto3 = new Producto(3, "Celular", "electrodoméstico", 500, 300, 7)

productos.push(producto1,producto2,producto3)

function agregarProductos(){
    let numeroProductos = parseInt(prompt("Número de productos a ingresar"))
    for(let index = 0; index < numeroProductos; index++){
        let id = prompt("Ingrese el id del producto")
        let nombre = prompt("ingrese el nombre del producto")
        let cat = prompt("Ingrese la categoría del producto")
        let precioVenta = parseFloat(prompt("Ingrese el precio de venta del producto"))
        let precioCompra = parseFloat(prompt("Ingrese el precio de compra del producto"))
        let cantidad = parseFloat(prompt("Ingrese la cantidad de productos"))
        let productoRegistrado = new Producto(id, nombre, cat, precioVenta, precioCompra, cantidad)
        productos.push(productoRegistrado)
    }
    return productos
}


function convertirObjetoEnTexto(objeto) {
    let texto = "";
    for (const clave in objeto) {
        if (typeof objeto[clave] !== "function")
            texto += clave + " : " + objeto[clave] + "\n";
        }
    return texto;
    }

// Mostrar productos
function mostrarProductos() {
        for (let index = 0; index < productos.length; index++) {
    alert(convertirObjetoEnTexto(productos[index]))
    }
}
// Buscar productos
function buscarProdcutos () {
    let nombreABuscar = prompt("Ingrese el nombre del producto que busca")
    let productoEncontrado = productos.find((elemento) => elemento.nombre === nombreABuscar.toUpperCase())
    if (productoEncontrado != undefined) {
        alert(convertirObjetoEnTexto(productoEncontrado))
    }else{
        alert("Busqueda sin éxito.")
    }
}

// Filtrar productos por precio
function filtrarPrecio() {
    let precioMax = parseInt(prompt("Ingrese el precio máximo del producto."))
    let productosPorPrecio = productos.filter((elemento) => elemento.precioVenta < precioMax)

    alert(JSON.stringify(productosPorPrecio))
}

// Calcular costo del almacen
function calcularCostoAlmacen () {
    let costoAlmacen = productos.reduce ((acumulador, elemento) => acumulador + elemento.precioCompra, 0)
    alert("El costo total del almacen es: $" + costoAlmacen)
}

// Menu
function mostrarMenu() {
    const OPCION = prompt(
    "Bienvenido, seleccione una opción (ESC para salir)\n1. Agregar productos. \n2. Buscar productos (nombre). \n3. Filtrar productos por precio (colocar precio máximo). \n4. Precio del almacen. \n5. Mostrar productos."
    );
    return OPCION;
}

function procesarInventario () {
    let opcionSeleccionada = mostrarMenu ()
    while (opcionSeleccionada?.toLowerCase() != "esc") {
        if (opcionSeleccionada != "") {
            opcionSeleccionada = parseInt(opcionSeleccionada);
            if (!isNaN(opcionSeleccionada)) {
                switch (opcionSeleccionada) {
                case 1:
                    miProducto = agregarProductos();
                    break;
                case 2:
                    buscarProdcutos()
                    break;
                case 3:
                    filtrarPrecio()
                    break;
                case 4:
                    calcularCostoAlmacen()
                    break;
                case 5:
                    mostrarProductos()
                    break;
                
            } 
        } else {
                alert("Ingresó una letra");
            }
        } else {
        alert("Seleccione la opción");
            }
        opcionSeleccionada = mostrarMenu();
        }
}    


// Crear tarjetas
const contenedorProductos = document.getElementById("contenedor-productos");

function pintarProductos () {
    for (const producto of productos) {
        let column = document.createElement("div");
        column.id = `columna-${producto.id}`;
        column.innerHTML = `
            <div class="card">
                <div class="card-body">
                <p class="card-text">Nombre: <b>${producto.nombre}</b></p>
                <p class="card-text">Categoría: <b>${producto.cat}</b></p>
                <p class="card-text">Precio compra: <b>$${producto.precioCompra}</b></p>
                <p class="card-text">Precio venta: <b>$${producto.precioVenta}</b></p>
                <p class="card-text">Cantidad: <b>${producto.cantidad}</b></p>
                </div>
            </div>`;
        contenedorProductos.append(column);
    }
}


// Funcion directora
function main() {
    procesarInventario();
    pintarProductos();
}

main();