type IDPERSONA = number | string;
let idPersona:IDPERSONA;

idPersona = 123;
idPersona = "abc123";

imprimirCodigo(idPersona);

function imprimirCodigo(id: IDPERSONA) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log({id});
    }
}

type Producto = {
    id: number;
    nombre: string;
    precio: number;
}
type ConDescuento = {
    descuento: number;
}

type ProductoConDescuento = Producto & ConDescuento;
const libroEnofertas: ProductoConDescuento = {
    id: 1,
    nombre: "El Quijote",
    precio: 20,
    descuento: 0.15
}