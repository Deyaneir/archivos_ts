let frutas: string[] = ["manzana", "banana", "naranja"];
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
// En este caso se declara la variable frutas y se asigna un array de strings, esto es para cuando se sabe que 
// la variable va a tener un array de strings como valor.
let calificaciones: number[] = [10, 8, 9, 7];
calificaciones.forEach(calificacion=>{
    console.log(calificacion);
});
/*console.log(calificaciones[0]);
console.log(calificaciones[1]);
console.log(calificaciones[2]);
console.log(calificaciones[3]);*/
// En este caso se declara la variable 
// calificaciones y se asigna un array de numeros
let paises: Array<string> = ["Argentina", "Brasil", "Chile"];