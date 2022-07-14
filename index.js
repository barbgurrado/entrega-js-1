let usuario = prompt ('Hola! Ingresa tu nombre')
alert ("Bienvenido" + " " + usuario)

let respuesta = prompt (usuario + " Tu edad?")

while (respuesta <-21) { 
    answer = prompt ("Es correcto?")
	
    if (answer == "si") { 
	    alert ("No podes ingresar") 
	  } else { 
    	respuesta = prompt ("Ingresa tu edad")
    } 
}

let bebida =prompt("Ingrese que bebida desea adquirir: opcion 1 = corona,  opcion 2 = quilmes, opcion 3 = patagonia, opcion 4 = heineken")

while(bebida != 1 && bebida != 2 && bebida != 3 && bebida !=4) {
alert ("Opcion incorrecta")
bebida =prompt("Ingrese que bebida desea adquirir: opcion 1 = corona,  opcion 2 = quilmes, opcion 3 = patagonia, opcion 4 = heineken")
}

if(bebida == 1) {
  precio = 1700 }
if(bebida == 2) {
  precio = 1000 } 
if(bebida == 3) {
  precio = 1300 }    
else { 
precio = 1450 }
alert("El precio del pack es " + precio)

let dinero =prompt("Con cuanto abona?")
while(dinero < precio) {
alert("El pago es insuficiente")
dinero =prompt("Con cuanto abona?")
}

let vuelto = dinero - precio
alert("El total es de " + precio + " y tu vuelto es de " + vuelto)

function showMessage() {
  alert( 'Gracias por tu compra!' );
}

showMessage();

class Producto {
  constructor (nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
  }
}

let listaProductos = [
  {nombre: "corona", precio: 1700},
  {nombre: "quilmes", precio: 1000},
  {nombre: "patagonia", precio: 1300},
  {nombre: "heineken", precio: 1450},
];

const agregarProd = () => {
  let nombre = prompt("Nombre del producto");
  let precio = parseFloat(prompt("Nombre del producto"));
  let prod = new Producto(nombre, precio);
  listaProductos.push(prod);
  console.log(listaProductos);
}


for( let producto of listaProductos) {
  console.log(`Este producto es ${producto.nombre} y su precio es ${producto.precio}`);
}
