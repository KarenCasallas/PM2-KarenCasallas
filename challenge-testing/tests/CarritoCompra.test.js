const {CarritoCompra} = require("../index");

// CarritoCompra debe ser una clase

describe("clase carrito de compras",() =>{
    it("debe ser una clase",() =>{
        expect(typeof CarritoCompra).toBe('function');
    });
});

// Metodos definidos en la clase

describe("tests metodos definidos",() =>{
    it("la clase debe tener los siguientes metodos",() =>{
        expect(CarritoCompra.prototype.agregarProducto).toBeDefined();
        expect(CarritoCompra.prototype.calcularTotal).toBeDefined();
        expect(CarritoCompra.prototype.aplicarDescuento).toBeDefined();
    });
});

// constructor(): Inicializa el carrito como un array vacío.

describe("la funcion 'constructor():' de CarritoCompra",() =>{
    const nuevoCarrito = new CarritoCompra();
    it("debe inicializar el carrito como un array vacío",() =>{
       expect(nuevoCarrito.lista).toEqual([]); 
    });
});

// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

describe("el metodo 'agregarProducto'",() =>{
    const nuevoCarrito = new CarritoCompra();
    const producto = {
        name: "manzana",
        price: 5,
        units: 2,
    };
    nuevoCarrito.agregarProducto(producto);
    it("recibe como argumento un '(producto)' representado en un objeto y lo agrega al carrito",() =>{
        expect(nuevoCarrito.lista).toContain(producto);
    });  
});

// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

describe("el metodo 'calcularTotal'",() =>{

    const nuevoCarrito = new CarritoCompra();

    nuevoCarrito.lista = [
        {   nombre: "manzana", precio: 5, cantidad: 2 },
        {   nombre: "peras", precio: 3, cantidad: 1 },
        ];
    
    nuevoCarrito.calcularTotal();

    it("deberia poder calcular el total de la compra sumando los precios de todos los productos en el carrito",() =>{
        expect(nuevoCarrito.calcularTotal()).toBe(13);
    });
});   


// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

describe("el metodo 'aplicarDescuento",() =>{

    const nuevoCarrito = new CarritoCompra();
    let sumaTotal = nuevoCarrito.calcularTotal();
       
    nuevoCarrito.lista = [
        {   nombre: "manzana", precio: 5, cantidad: 2 },
        {   nombre: "peras", precio: 3, cantidad: 1 },
        ];

        
    it("deberia aplicar un descuento al total de la compra segun el porcentaje especificado",() =>{

        const valorFinal = nuevoCarrito.aplicarDescuento(20);

        expect(valorFinal).toEqual(10.4);
    });
});