class Producto {
    constructor(nombre, cat, precioVenta, precioCompra, cantidad,) {
        this.nombre = nombre.toUpperCase();
        this.cat = cat
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
    calcularCosto = () => this.cantidad * this.precioCompra
}

// Cargar productos
let productos = []
function agregarProductos(){
    let numeroProductos = parseInt(prompt("Número de productos a ingresar"))
    for(let index = 0; index < numeroProductos; index++){
        let nombre = prompt("ingrese el nombre del producto")
        let cat = prompt("Ingrese la categoría del producto")
        let precioVenta = parseInt(prompt("Ingrese el precio de venta del producto"))
        let precioCompra = parseInt(prompt("Ingrese el precio de compra del producto"))
        let cantidad = parseInt(prompt("Ingrese la cantidad de productos"))
        let productoRegistrado = new Producto(nombre, precioVenta, precioCompra, cantidad)
        productos.push(productoRegistrado)
    }
    return productos
}
agregarProductos()

// Mostrar productos
function mostrarProductos (productos) {
    for(let producto of productos){
        console.log(producto)
        console.log(producto.nombre)
    }
}
mostrarProductos(productos)


