//variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCurso = document.querySelector('#lista-cursos');
const vaciarCarrito = document.querySelector('vaciar-carrito');
let articulosCarrito = [];

cargarEventListener();
function cargarEventListener(e){
    //cuando un evento agrega un curso
    listaCurso.addEventListener('click', agrgarCurso);
    console.log(e.target.parentElenment);
}

//Funciones
function agrgarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
    const cursoSelecionado = e.target.parentElement.parentElement;
    leerDatosCursos(cursoSelecionado);
    }
}

//lle el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCursos(curso){
    console.log(curso);

    //crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen:curso.querySelector('img').src,
        titulo:curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    console.log(infoCurso)
    //agregar elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
    console.log(articulosCarrito);
    carritoHTML();
}





//Muestra el carrito de compras en el HTML 
function carritoHTML(){

    //limpiar el HTML
    limpiarHTML();
    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso =>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${curso.titulo}
            </td>
        `;
        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });

}

//elimina los curso del tbody
function limpiarHTML(){
    //forma lenta
    //contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)

    }
}