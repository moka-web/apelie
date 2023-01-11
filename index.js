const btn = document.querySelector('#botondeprueba')
const desplegable = document.querySelector('#menu')


let mostrar = true;

function mostrarMensaje (){
    if (mostrar===true) {
        desplegable.style.display= 'inline-block'
        mostrar = false;
    }else{
        desplegable.style.display= 'none'
        mostrar=true;
    }
}