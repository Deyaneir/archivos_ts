let respuesta: [number,string]
respuesta=[200,"exitosa"];
console.log("status = ",respuesta[0]);
console.log("mensaje = ",respuesta[1]);
// En este caso se declara la variable respuesta y se asigna una tupla, esto es para cuando se sabe que la variable va a 
// tener un array con un numero y un string como valor.

let usuario: [number,string,boolean];
usuario=[123,"Damaris",true];
console.log("usuario = ",usuario[0]);
console.log("usuario = ",usuario[1]);
console.log("usuario = ",usuario[2]);