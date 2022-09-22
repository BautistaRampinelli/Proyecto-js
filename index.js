let productos = [];
let form = document.getElementById("form");
let inputId = document.getElementById("inputId");
let inputNombre = document.getElementById("inputNombre");
let inputProveedor = document.getElementById("inputProveedor");
let inputPrecioCompra = document.getElementById("inputPrecioCompra");
let inputPrecioVenta = document.getElementById("inputPrecioVenta");
let inputCantidad = document.getElementById("inputCantidad");
const contenedorProductos = document.getElementById("contenedor-productos");

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
        let producto = new Producto( id, nombre, proveedor, precioCompra, precioVenta, cantidad);
        productos.push(producto);
        form.reset();
        pintarProductos();
    } else {
        alert("El id ya existe");
    }
}

// Crear tarjetas

function pintarProductos () {
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
                </div>
            </div>`;
        contenedorProductos.append(column);
    }
}


// Funcion directora
function main() {
    inicializarEventos();
    validarFormulario();
}

main();


