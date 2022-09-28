//variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCurso = document.querySelector('#lista-cursos');
const vaciarCarrito = document.querySelector('vaciar-carrito');

cargarEventListener();
function cargarEventListener(){
    //cuando un evento agrega un curso
    listaCurso.addEventListener('click', agrgarCurso);
}

//Funciones
function agrgarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
    console.log(e.target);
    }
}