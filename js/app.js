//variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCurso = document.querySelector('#lista-cursos');
const vaciarCarrito = document.querySelector('vaciar-carrito');
let articulosCarrito = [];

//
cargarEventListener();

function cargarEventListener(e){
    //Dispara cuando se presiona "Agregar Carrito"
    //cuando un evento agrega un curso
    listaCurso.addEventListener('click', agrgarCurso);
    //console.log(e.target.parentElenment);
}

//Funciones
//Función que añade el curso al carrito
function agrgarCurso(e){
    e.preventDefault();
    //Delegation para agregar-carrito
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSelecionado = e.target.parentElement.parentElement;
        leerDatosCursos(cursoSelecionado);
    }
}

//lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCursos(curso){
    //console.log(curso);

    //crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen:curso.querySelector('img').src,
        titulo:curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
    if(existe){
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso;//retorna el objeto actualizado
            }else{
                return curso;//retorna los objetos que no son los duplicados
            }
        });
        articulosCarrito = [...cursos];
    }else {
        //Agregamos elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito,infoCurso];
    }



    //console.log(infoCurso)
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
        const {imagen, titulo,precio,cantidad,id}= curso;
        //console.log(curso);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${curso.imagen}" width ="100">
            </td>
            <td>
                ${titulo}
            </td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data=id"${curso.id}"> X </a>
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