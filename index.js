let productos = [];
let form = document.getElementById("form");
let inputId = document.getElementById("inputId");
let inputNombre = document.getElementById("inputNombre");
let inputProveedor = document.getElementById("inputProveedor");
let inputPrecioCompra = document.getElementById("inputPrecioCompra");
let inputPrecioVenta = document.getElementById("inputPrecioVenta");
let inputCantidad = document.getElementById("inputCantidad");
const contenedorProductos = document.getElementById("contenedor-productos");
let productosJSON
let limpiarLS = document.getElementById("limpiarLS");

class Producto {
    constructor(id, nombre, proveedor, precioVenta, precioCompra, cantidad,) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.proveedor = proveedor;
        this.precioVenta = precioVenta;
        this.precioCompra = precioCompra;
        this.cantidad = cantidad;
    }
    calcularCosto = () => this.cantidad * this.precioCompra;
}

function inicializarEventos() {
    form.onsubmit = (event) => validarFormulario(event);
    limpiarLS.onclick = borrarLS;
}


function validarFormulario(event) {
    event.preventDefault()
    let id = parseFloat(inputId.value);
    let nombre = inputNombre.value;
    let proveedor = inputProveedor.value;
    let precioCompra = parseFloat(inputPrecioCompra.value);
    let precioVenta = parseFloat(inputPrecioVenta.value);
    let cantidad = parseInt(inputCantidad.value);
    const idExiste = productos.some((producto) => producto.id === id);
    if (!idExiste) {
        let producto = new Producto( id, nombre, proveedor, precioVenta, precioCompra, cantidad);
        productos.push(producto);
        form.reset();
        guardarProductosLS()
        pintarProductos();
    } else {
        alert("El id ya existe");
    }
}

// Crear tarjetas

function pintarProductos () {
    contenedorProductos.innerHTML = "";
    for (const producto of productos) {
        let column = document.createElement("div");
        column.id = `columna-${producto.id}`;
        column.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <p class="card-text">Nombre: <b>${producto.nombre}</b></p>
                    <p class="card-text">Proveedor: <b>${producto.proveedor}</b></p>
                    <p class="card-text">Precio compra: <b>$${producto.precioCompra}</b></p>
                    <p class="card-text">Precio venta: <b>$${producto.precioVenta}</b></p>
                    <p class="card-text">Cantidad: <b>${producto.cantidad}</b></p>
                    <div class="card-footer">
                        <button id="botonEliminar-${producto.id}" >Eliminar</button>
                    </div>
                    </div>
            </div>`;
        contenedorProductos.append(column);
        let botonEliminar = document.getElementById(`botonEliminar-${producto.id}`);
        botonEliminar.onclick = () => eliminarProducto(producto.id);
    }
}

function eliminarProducto(idProducto) {
    let columnaBorrar = document.getElementById(`columna-${idProducto}`);
    let indiceBorrar = productos.findIndex(
        (producto) => Number(producto.id) === Number(idProducto)
    );
    productos.splice(indiceBorrar, 1);
    columnaBorrar.remove();
    actualizarProductosLS();
}

// Local storage

function guardarProductosLS() {
    let productosJSON = JSON.stringify(productos);
    localStorage.setItem("productos", productosJSON);
}

function obtenerProductosLS() {
    let productosJSON = localStorage.getItem("productos");
    if(productosJSON) {
        productos = JSON.parse(productosJSON);
        pintarProductos();
    }
}

function actualizarProductosLS() {
    let productosJSON = JSON.stringify(productos);
    localStorage.setItem("productos", productosJSON);
}

function borrarLS() {
    localStorage.clear();
    usuario = "";
    productos = [];
    pintarProductos();
}

// Funcion directora
function main() {
    inicializarEventos();
    obtenerProductosLS();
    validarFormulario();

}

main();



// Cargar productos


// let producto1 = new Producto(1, "TV", "electrodoméstico", 600, 400, 5)
// let producto2 = new Producto(2, "Taladro", "herramienta", 200, 140, 12)
// let producto3 = new Producto(3, "Celular", "electrodoméstico", 500, 300, 7)

// productos.push(producto1,producto2,producto3)

// function agregarProductos(){
//     let numeroProductos = parseInt(prompt("Número de productos a ingresar"))
//     for(let index = 0; index < numeroProductos; index++){
//         let id = prompt("Ingrese el id del producto")
//         let nombre = prompt("ingrese el nombre del producto")
//         let cat = prompt("Ingrese la categoría del producto")
//         let precioVenta = parseFloat(prompt("Ingrese el precio de venta del producto"))
//         let precioCompra = parseFloat(prompt("Ingrese el precio de compra del producto"))
//         let cantidad = parseFloat(prompt("Ingrese la cantidad de productos"))
//         let productoRegistrado = new Producto(id, nombre, cat, precioVenta, precioCompra, cantidad)
//         productos.push(productoRegistrado)
//     }
//     return productos
// }


// function convertirObjetoEnTexto(objeto) {
//     let texto = "";
//     for (const clave in objeto) {
//         if (typeof objeto[clave] !== "function")
//             texto += clave + " : " + objeto[clave] + "\n";
//         }
//     return texto;
//     }

// // Mostrar productos
// function mostrarProductos() {
//         for (let index = 0; index < productos.length; index++) {
//     alert(convertirObjetoEnTexto(productos[index]))
//     }
// }
// // Buscar productos
// function buscarProdcutos () {
//     let nombreABuscar = prompt("Ingrese el nombre del producto que busca")
//     let productoEncontrado = productos.find((elemento) => elemento.nombre === nombreABuscar.toUpperCase())
//     if (productoEncontrado != undefined) {
//         alert(convertirObjetoEnTexto(productoEncontrado))
//     }else{
//         alert("Busqueda sin éxito.")
//     }
// }

// // Filtrar productos por precio
// function filtrarPrecio() {
//     let precioMax = parseInt(prompt("Ingrese el precio máximo del producto."))
//     let productosPorPrecio = productos.filter((elemento) => elemento.precioVenta < precioMax)

//     alert(JSON.stringify(productosPorPrecio))
// }

// // Calcular costo del almacen
// function calcularCostoAlmacen () {
//     let costoAlmacen = productos.reduce ((acumulador, elemento) => acumulador + elemento.precioCompra, 0)
//     alert("El costo total del almacen es: $" + costoAlmacen)
// }

// // Menu
// function mostrarMenu() {
//     const OPCION = prompt(
//     "Bienvenido, seleccione una opción (ESC para salir)\n1. Agregar productos. \n2. Buscar productos (nombre). \n3. Filtrar productos por precio (colocar precio máximo). \n4. Precio del almacen. \n5. Mostrar productos."
//     );
//     return OPCION;
// }

// function procesarInventario () {
//     let opcionSeleccionada = mostrarMenu ()
//     while (opcionSeleccionada?.toLowerCase() != "esc") {
//         if (opcionSeleccionada != "") {
//             opcionSeleccionada = parseInt(opcionSeleccionada);
//             if (!isNaN(opcionSeleccionada)) {
//                 switch (opcionSeleccionada) {
//                 case 1:
//                     miProducto = agregarProductos();
//                     break;
//                 case 2:
//                     buscarProdcutos()
//                     break;
//                 case 3:
//                     filtrarPrecio()
//                     break;
//                 case 4:
//                     calcularCostoAlmacen()
//                     break;
//                 case 5:
//                     mostrarProductos()
//                     break;              
//             } 
//         } else {
//                 alert("Ingresó una letra");
//             }
//         } else {
//         alert("Seleccione la opción");
//             }
//         opcionSeleccionada = mostrarMenu();
//         }
// }    





