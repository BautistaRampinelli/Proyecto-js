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
    limpiarLS.onclick = mostrarSwalBorrarLS
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
        //mostrarSwalProductoAgregado
        let producto = new Producto( id, nombre, proveedor, precioVenta, precioCompra, cantidad);
        productos.push(producto);
        form.reset();
        guardarProductosLS();
        pintarProductos();
        
    } else {
        alert("El id ya existe");
    }
}

// function mostrarSwalProductoAgregado() {
//     Swal.fire(
//         'The Internet?',
//         'That thing is still around?',
//         'question'
//     )
// }

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
        botonEliminar.onclick = mostrarSwalEliminarProducto;
        function mostrarSwalEliminarProducto() {
            Swal.fire({
                title: 'Estas seguro de eliminar este producto?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'Eliminar.',
                denyButtonText: `Cancelar.`,
                }).then((result) => {
                if (result.isConfirmed) {
                    eliminarProducto(producto.id)
                    Swal.fire('Producto eliminado.')
                } else if (result.isDenied) {
                    Swal.fire('Cancelado.')
                }
            })
        }
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

// Sweet alert


function mostrarSwalBorrarLS() {
    Swal.fire({
        title: 'Estas seguro de eliminar todo el inventario?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Eliminar.',
        denyButtonText: `Cancelar.`,
        }).then((result) => {
        if (result.isConfirmed) {
            borrarLS();
            Swal.fire('Inventario eliminado.');
        } else if (result.isDenied) {
            Swal.fire('Cancelado.')
        }
    })
}



// Funcion directora
function main() {
    inicializarEventos();
    obtenerProductosLS();
    validarFormulario();

}

main();
