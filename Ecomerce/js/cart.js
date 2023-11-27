const contenedortarjetas = document.getElementById("productos-container")
const unidadesElement = document.getElementById("unidades");
const precioElement = document.getElementById("precio");
const carritovacio = document.getElementById("carrito-vacio");
const totalElement = document.getElementById("totales");
const reiniciar = document.getElementById("Reiniciar");


const product = [
    {id:1,nombre:"Polera over black",precio:2000,img:"./imagenes/1.jpg"},
    {id:2,nombre:"Polera over white",precio:2000,img:"./imagenes/oversizeblack.jpg"},
    {id:3,nombre:"Jeans straight",precio:2000,img:"./imagenes/jeans.jpg"},
    {id:4,nombre:"Jordan retro",precio:3000,img:"./imagenes/retro1.jpg"},
]

function crearProductosInicio(){
    contenedortarjetas.innerHTML="";
    const productos = JSON.parse(localStorage.getItem("bicicletas"));
    console.log(productos);
    if(productos && productos.length >0){
        productos.forEach(items => {
            const newProducto = document.createElement("div");
            newProducto.classList = "tarjeta-producto";
            newProducto.innerHTML = `
            <img src= "${items.img}">
            <h3> Nombre:${items.nombre} </h3>
            <b> Precio: ${items.precio}</b>
            <div>
                <button>-</button>
                <span class="cantidad">${items.cantidad}</span>
                <button>+</button>
            </div>
            `;


            contenedortarjetas.appendChild(newProducto);
            newProducto.getElementsByTagName("button")[1].addEventListener("click", (e)=> {
            const cuentaElement=e.target.parentElement.getElementsByTagName( "span")[0]
            cuentaElement.innerText=agregarCarrito(items);
            updateTotales();
        });
            newProducto.getElementsByTagName("button")[0].addEventListener("click", (e)=> {
            restarCarrito(items);
            crearProductosInicio();
            updateTotales();
            
            });
        });
    }
    
}

crearProductosInicio();


const updateTotales = ()=>{
    const productos = JSON.parse(localStorage.getItem("bicicletas"));
    let unidades=0;
    let precio=0;
    if(productos && productos.length >0){
        productos.forEach(producto=>{
            unidades += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        })
        unidadesElement.innerText=unidades;
        precioElement.innerText=precio;

    }

}


function Mensajevacio(){
    const productos = JSON.parse(localStorage.getItem("bicicletas"));
    carritovacio.classList.toggle("escondido",productos && productos.length > 0);
    totalElement.classList.toggle("escondido",!(productos && productos.length>0));
}

Mensajevacio();


reiniciar.addEventListener("click",reiniciarCarrito);
function reiniciarCarrito(){
    localStorage.removeItem("bicicletas");
    Mensajevacio();
    crearProductosInicio();


}