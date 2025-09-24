const productos = 
[
    {nombre: "Laptop", precio: 12000},
    {nombre: "Mause", precio: 250},
    {nombre: "Teclado", precio: 750},
    {nombre: "Monitor", precio: 3000}
]

const Mayores = productos.filter(precios => precios.precio >1000);

const nombres = Mayores.map(precio => precio);
console.log(nombres);   