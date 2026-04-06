let mensaje: unknown;
mensaje="Hola, mundo!";

let resultado = (<string>mensaje).toUpperCase();
console.log("resultado =",resultado);

type Producto = {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    category: {
        id: number;
        name: string;
        slug: string;
        image: string;
        creationAt: string;
        updatedAt: string;
    };
    images: string[];
    creationAt: string;
    updatedAt: string;
}


async function obtenerProducto(idProducto: number): Promise<Producto> {
    const url = `https://api.escuelajs.co/api/v1/products/${idProducto}`;
    const response = await fetch(url);
    const data: Producto = await response.json();
    return data;
}
async function obtenerTitulo(idProducto: number): Promise<string> {
    const producto = await obtenerProducto(idProducto);
    return producto.title;
}
async function test(idProducto: number) {
    const tituloProducto = await obtenerTitulo(idProducto);
    console.log("tituloProducto =", tituloProducto);
}

test(50);
