class CarritoCompra {
    constructor(){
        this.lista = [];
    }

    agregarProducto(producto){
        this.lista.push(producto);
    };

    calcularTotal(){

        let sumaTotal = 0;
        
        for (let i=0; i < this.lista.length; i++){
            const precioProducto = (this.lista[i].precio * this.lista[i].cantidad );
            sumaTotal += precioProducto;
        }
            return sumaTotal;
    };

    aplicarDescuento(porcentajeDescuento){

        let sumaTotal = this.calcularTotal();
        let descuento = porcentajeDescuento/100;

        let valorFinal = sumaTotal - (sumaTotal * descuento);

        return valorFinal;
    };
}

const carritoCompra = new CarritoCompra();


module.exports = {
    CarritoCompra,
};