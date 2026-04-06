type Persona={
    readonly id: number,
    nombre: string,
    esEstudiante: boolean
}
const persona1:Persona={
    id: 1,
    nombre:"Damaris",
    esEstudiante: true
}

const persona2:Persona={
    id  : 2,
    nombre:"Juan",
    esEstudiante: false
}

persona2.nombre="Lia";
console.table(persona1);
console.table(persona2);
// En este caso se declara un tipo de dato llamado
//  Persona, el cual es un objeto con tres 
// propiedades, id, nombre y esEstudiante. 
// Luego se crean dos variables de tipo Persona, 
// persona1 y persona2, y se les asignan valores. 