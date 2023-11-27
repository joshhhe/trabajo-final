const nombre = document.getElementById("Nombre");
const contraseña = document.getElementById("password");
const correo = document.getElementById("Correo");
const btn = document.getElementById("btn-1");
const form = document.getElementById("form");
const parrafo = document.getElementById("warning");




form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let warning = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = "";
    if(nombre.value.length <= 6){
        warning += `El nombre tiene que tener mas de 6 caracteres <br>`
        entrar = true
    }
    if(!regexEmail.test(correo.value)){
        warning += `El correo no es valido <br>`
        entrar = true
    }

    if(contraseña.value < 8){
        warning += `La contraseña debe tener mas de 8 caracteres<br>`
        entrar=true
    }
    if(entrar){
        parrafo.innerHTML= warning;
    }

})