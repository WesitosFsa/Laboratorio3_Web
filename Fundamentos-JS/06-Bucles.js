//for

const cantidadLaptopsDisponibles = 2;
console.log("-------------------------");
console.log("Bienvenido a Amazon for.");

for (let i = cantidadLaptopsDisponibles; i > 0; i--) {
    console.log(`Laptops disponibles: ${i}`);

    if (i === 1) {
        console.log("¡Última laptop disponible!");
    } else {
        console.log("¿Desea agregar una laptop al carrito?");
    }
}

console.log("Gracias por visitar nuestra tienda.");

//while

let cantidadLaptopsDisponiblesw = 2;
console.log("-------------------------");
console.log("Bienvenido Amazon While");

while (cantidadLaptopsDisponiblesw > 0) {
    console.log(`Laptops disponibles: ${cantidadLaptopsDisponiblesw}`);

    if (cantidadLaptopsDisponiblesw === 1) {
        console.log("¡Última laptop disponible!");
    } else {
        console.log("¿Desea agregar una laptop al carrito?");
    }

    cantidadLaptopsDisponiblesw--;
}

console.log("Gracias por visitar nuestra tienda.");

//Do While

let cantidadLaptopsDisponiblesdw = 2;
console.log("-------------------------");
console.log("Bienvenido a Amazon DoWhile");

do {
    console.log(`Laptops disponibles: ${cantidadLaptopsDisponiblesdw}`);

    if (cantidadLaptopsDisponiblesdw === 1) {
        console.log("¡Última laptop disponible!");
    } else {
        console.log("¿Desea agregar una laptop al carrito?");
    }

    cantidadLaptopsDisponiblesdw--;
} while (cantidadLaptopsDisponiblesdw > 0);

console.log("Gracias por visitar nuestra tienda.");

//ForEach - Forof - Forin


// Objeto que representa una laptop
const laptop = {
    marca: "Asus",
    modelo: "RogStrix",
    precio: 1060.45,
    accesorios: ["Mouse", "Mochila", "Mousepad"]
  };
  
  // Calcular el precio total con descuento
  const precioTotal = laptop.precio - laptop.descuento;
  
  // Método 1: ForEach
  console.log("\n---------------------");
  console.log("Usando for  Each:");
  Object.entries(laptop).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
  
  // Método 2: For...of
  console.log("\n---------------------");
  console.log("\nUsando for  of:");
  for (const [key, value] of Object.entries(laptop)) {
    console.log(`${key}: ${value}`);
  }
  
  // Método 3: For...in
  console.log("\n---------------------");
  console.log("\nUsando for   in:");
  for (const key in laptop) {
    console.log(`${key}: ${laptop[key]}`);
  }
  

  console.log("\nPrecio Total con descuento: $" + precioTotal);
  