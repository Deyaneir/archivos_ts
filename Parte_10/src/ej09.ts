enum EstadoPedido{
    Inicial,
    EnProceso,
    Enviado,
    Recibido

}

let estado: EstadoPedido;
estado=EstadoPedido.Enviado;
console.log("Estado del pedido:", estado);

enum EstadoCompra{
    Inicial="I",
    Facturada="F",
    Devuelto="D"
}

let estadoC: EstadoCompra;
estadoC=EstadoCompra.Devuelto;
console.log("Estado de la compra:", estadoC);
enum CodigoError{
    OK=100,
    ErroRed=200,
    ErrorBDD=300
}
let error: CodigoError;
error=CodigoError.ErrorBDD;
console.log("Código de error:", error);