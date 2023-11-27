function agregarCarrito (producto){
    const memoria = JSON.parse(localStorage.getItem("bicicletas"))
    console.log(memoria);
    let cuenta = 0;
    if(!memoria){
        let nuevoProducto = GetnuevaMemoria(producto);
        localStorage.setItem("bicicletas",JSON.stringify([nuevoProducto]))
        cuenta =1;
    } else{
        const indiceProducto = memoria.findIndex(bicicleta=> bicicleta.id === producto.id);
        console.log(indiceProducto);
        const nuevaMemoria = memoria;
        if(indiceProducto === -1){
            nuevaMemoria.push(GetnuevaMemoria(producto))
            cuenta=1;
        }else {
            nuevaMemoria[indiceProducto].cantidad ++;
            cuenta = nuevaMemoria[indiceProducto].cantidad;
        }
        localStorage.setItem("bicicletas",JSON.stringify(nuevaMemoria));
    }
    updateNumerocarrito();
    return cuenta;
}



const restarCarrito =(producto) =>{
    const memoria = JSON.parse(localStorage.getItem("bicicletas"))
    const indiceProducto = memoria.findIndex(bicicleta=> bicicleta.id === producto.id);
    if(memoria[indiceProducto].cantidad === 1){
        memoria.splice(indiceProducto,1);
        
    }else{
        memoria[indiceProducto].cantidad--;
    }
    localStorage.setItem("bicicletas",JSON.stringify(memoria));
    updateNumerocarrito();
}

const GetnuevaMemoria= (producto)=>{
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;

}

const cuentacarritoElement=document.getElementById("carrito-cuenta");
const updateNumerocarrito = ()=>{
    const memoria = JSON.parse(localStorage.getItem("bicicletas"))
    const cuenta = memoria.reduce((acum,current)=>acum+current.cantidad,0)
    cuentacarritoElement.innerText = cuenta;
}
updateNumerocarrito();