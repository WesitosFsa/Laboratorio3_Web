
// Programa beta de Amazon solo JS
// Variables
//Var
var EstadoClienteActivo = true;

if (EstadoClienteActivo === false) {
    console.log('Expulsado por inactividad');
} else {
    console.log('Procede el usuario continuando en la pagina');
}
//Let y const
const modeloLaptop = "ASUS ROG Strix G16 (2023) Laptop para juegos, 16 pulgadas 16:10 FHD 165Hz, GeForce RTX 4060";
const precioLaptop = 1060.45;
let cantidadLaptopsDeseadas = 1;
let subtotal = precioLaptop * cantidadLaptopsDeseadas;
let impuesto = subtotal * 0.16; // Suponiendo un impuesto del 16%
let total = subtotal + impuesto;
console.log("Detalles de la compra:");
console.log("Modelo de la laptop: " + modeloLaptop);
console.log("Precio unitario: $" + precioLaptop);
console.log("Cantidad deseada: " + cantidadLaptopsDeseadas);
console.log("Subtotal: $" + subtotal.toFixed(2));
console.log("Impuesto (16%): $" + impuesto.toFixed(2));
console.log("Total a pagar: $" + total.toFixed(2));

