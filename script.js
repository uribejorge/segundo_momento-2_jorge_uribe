let carrito = [];
let ventasTotales = 0;

function agregarAlCarrito(producto) {
    const productoExistente = carrito.find(item => item.id === producto.id);
    if (productoExistente) {
      productoExistente.cantidad++;
      productoExistente.total += producto.valor;
    } else {
      carrito.push({...producto, cantidad: 1, total: producto.valor});
    }
    console.log("Producto agregado al carrito:", producto.nombre);
  }
  
  function verCarrito() {
    if (carrito.length === 0) {
      console.log("El carrito está vacío.");
    } else {
      console.log("Productos en el carrito:");
      carrito.forEach(item => {
        console.log(`${item.nombre} - Cantidad: ${item.cantidad} - Total: $${item.total}`);
      });
    }
    const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0);
    const valorTotal = carrito.reduce((total, item) => total + item.total, 0);
    console.log(`Cantidad total de productos: ${cantidadTotal}`);
    console.log(`Valor total de la compra: $${valorTotal}`);
  }
  
  function realizarVenta() {
    ventasTotales++;
    console.log("Venta realizada. Total de ventas en el día:", ventasTotales);
  }
  
  function mostrarProductos() {
    console.log("Productos disponibles:");
    productos.forEach(producto => console.log(`${producto.id}. ${producto.nombre} - $${producto.valor}`));
    const idProducto = prompt("Seleccione el ID del producto que desea agregar al carrito:");
    const productoSeleccionado = productos.find(producto => producto.id === parseInt(idProducto));
    if (productoSeleccionado) {
      agregarAlCarrito(productoSeleccionado);
    } else {
      console.log("Producto no encontrado.");
    }
  }

  const productos = [
    { id: 1, nombre: "CELULAR", descripcion: "Descripción del Producto 1", valor: 4900000 },
    { id: 2, nombre: "AUDIFONOS", descripcion: "Descripción del Producto 2", valor: 1500000 },
    { id: 3, nombre: "RELOJ", descripcion: "Descripción del Producto 3", valor: 4200000 },
    { id: 4, nombre: "COMPUTADOR", descripcion: "Descripción del Producto 4", valor: 4200000 },
    { id: 5, nombre: "TELEVISOR", descripcion: "Descripción del Producto 5", valor: 3200000 }
  ];