
//simple

let carritoCompras = 0;

// Condincional Doble 
if (carritoCompras == 0) {
    console.log("El carrito está vacío. Agrega productos.");
} else {
    console.log("El carrito tiene productos. Procede con la compra.");
}


// Condicional simple
if (carritoCompras == 0) {
    console.log("Agregar productos");
    console.log("Laptop Agregada");
    console.log("Gracias");
    carritoCompras = 1
}

// Condicional Multiple

switch (carritoCompras) {
    case 1:
        console.log("Se procede con la compra");
        break;
    case 2:
        console.log("Se procede con la compra de dos productos");
        break;
    case 3:
        console.log("Se procede con la compra de tres productos");
        break;
    default:
        console.log(`No hay ningun producto disponible ${carritoCompras}`);
        break;
}
