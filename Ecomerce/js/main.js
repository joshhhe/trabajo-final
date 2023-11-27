const contenedortarjetas = document.getElementById("productos-container")

const product = [
    {id:1,nombre:"Polera over black",precio:2000,img:"./imagenes/1.jpg"},
    {id:2,nombre:"Polera over white",precio:2000,img:"./imagenes/oversizeblack.jpg"},
    {id:3,nombre:"Jeans straight",precio:2000,img:"./imagenes/jeans.jpg"},
    {id:4,nombre:"Jordan retro",precio:3000,img:"./imagenes/retro1.jpg"},
]

function crearProductosInicio(productos){
    productos.forEach(item =>{
        const newProducto = document.createElement("div");
        newProducto.classList = "tarjeta-producto"
        newProducto.innerHTML=`
        <img src= "${item.img}">
        <h3> Nombre:${item.nombre} </h3>
        <b> Precio: ${item.precio}</b>
        <button> Comprar </button>`
        contenedortarjetas.appendChild(newProducto);

        newProducto.getElementsByTagName("button")[0].addEventListener("click", ()=> agregarCarrito(item));
        });

}

crearProductosInicio(product)