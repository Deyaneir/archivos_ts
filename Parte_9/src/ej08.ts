function sumar(a:number,b:number): number {
    return a + b;
}
let resultadoSuma: number = sumar(5, 3);
console.log(resultadoSuma);


//-----------------------------
function saludar(nombre: string): void {
    console.log(`Hola, ${nombre}`);
}
saludar("Juan");


function saludarConApellido(nombre: string, apellido?: string): string {
    if (apellido) {
        return `Hola, ${nombre} ${apellido}`;
    } else {
        return `Hola, ${nombre}`;
    }
}
console.log(saludarConApellido("Ana"));
console.log(saludarConApellido("Ana", "García"));

//-------------------------------------------------

function saludarConCiudad(nombre: string, ciudad: string = "Desconocida"): string {
    return `Hola, ${nombre} de ${ciudad}`;
}
console.log(saludarConCiudad("Carlos"));
console.log(saludarConCiudad("Carlos", "Guadalajara"));