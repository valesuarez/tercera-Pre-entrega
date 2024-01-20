const productosVenta = document.getElementById("productosVenta")
const verCompra = document.getElementById("verCompra")
const listasComprar = document.getElementById("listasComprar")

let llenar_carrito = JSON.parse(localStorage.getItem('carrito'))|| [];

productos.forEach((producto)=>{
    let tarjetas = document.createElement("div")
    tarjetas.className = "tarjeta"
    tarjetas.innerHTML = `
    <img class="imagenProducto" src="${producto.imagen}">
    <h3 class="nombreProducto">${producto.nombre}</h3>
    <p class="precioProducto">$ ${producto.precio}</p>
    <button class="idProducto" id= "${producto.id}">Agregar</button>`;


    productosVenta.append(tarjetas);

    let btnComprar = document.createElement("button");
    btnComprar.innerText = "Comprar";
    btnComprar.className = "btnComprar"

    tarjetas.append(btnComprar);

    btnComprar.addEventListener("click", ()=>{
        llenar_carrito.push({
            id : producto.id,
            imagen : producto.imagen,
            nombre : producto.nombre,
            precio : producto.precio

            })
        //console.log(carrito);
    });

});

verCompra.addEventListener("click", ()=>{
    //console.log("funciona")
    listasComprar.innerHTML = "";
    listasComprar.style.display="flex"
    let listasProductosComprar =document.createElement("div");
    listasProductosComprar.className = "listaProductosComprar"
    listasProductosComprar.innerHTML = `<h1 class="titulo"> Carrito </h1>`;

     listasComprar.append(listasProductosComprar);

    const listaBtnCerrar = document.createElement ("h1");
    listaBtnCerrar.innerText = "X"
    listaBtnCerrar.className ="cerrarLista"
    
    listaBtnCerrar.addEventListener('click',() =>{
        listasComprar.style.display = "none";

    })

    listasProductosComprar.append(listaBtnCerrar);

    llenar_carrito.forEach((producto) =>{
        
        let contenidoDelCarrito = document.createElement("div")
        contenidoDelCarrito.className = "contenidoDelCarrito"
        contenidoDelCarrito.innerHTML =`
        <img class="imagenProductoCarrito" src="${producto.imagen}">
        <h3 class="nombreProductoCarrito">${producto.nombre}</h3>
        <p class="precioProductoCarrito">$ ${producto.precio}</p>
        <hr/`;
``
        listasComprar.append(contenidoDelCarrito);
    })
    const total = llenar_carrito.reduce((acc,el) => acc + el.precio, 0);

    const totalCarrito = document.createElement('div')
    totalCarrito.className = "totalCarrito"
    totalCarrito.innerHTML = `Total a pagar: $ ${total}`
    guardarDatos(llenar_carrito);
    listasComprar.append(totalCarrito);

})

function guardarDatos(llenar_carrito){
    localStorage.setItem('carrito',JSON.stringify(llenar_carrito));
    //console.log(localStorage)
}

