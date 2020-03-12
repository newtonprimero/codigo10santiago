alert("Este es un mensaje")
// lo que hace pront capturara lo ingresado por el ususario en forma de texto
// lo identifica primero como texto
var edad=prompt('introduce tu edad');

console.log(typeof edad);
console.log(edad);
// para convertir un texto a entero (o numero) puedo utilizar parseint 
var edadconvertidonumero = parseInt(edad);
console.log(typeof edadconvertidonumero)
console.log(edadconvertidonumero);
var edadconvertidonumero = edadconvertidonumero+1;
console.log(edadconvertidonumero);
// puedo convertir a numero añadiendo  un +(mas)
var edadNumero = +edad
console.log(edadNumero +1)