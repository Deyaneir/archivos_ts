let apellido:any;
apellido="Perez";
console.log("apellido =",apellido.toUpperCase());
console.log("longitud del apellido =",apellido.length);
// En este caso se declara la variable y 
// se asigna el tipo de dato any

let apellido1:unknown;
apellido1="Perez";

if (typeof apellido1 === "string") {
    console.log("apellido =",apellido1.toUpperCase());
    console.log("longitud del apellido =",apellido1.length);
}
// En este caso se declara la variable y 
// se asigna el tipo de dato unknown, esto es para 
// cuando no se sabe el tipo de dato que va a tener la 
// variable, pero si se sabe que va a tener un valor 
// asignado.
