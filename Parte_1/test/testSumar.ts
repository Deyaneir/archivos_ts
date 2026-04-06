import {sumar} from "../src/app.ts";
let respuesta=sumar(1,4);

if (respuesta === 5)
    console.log("Test correcto, respuesta: "+respuesta)
else
    console.log("Test incorrecto, respuesta: "+respuesta)
