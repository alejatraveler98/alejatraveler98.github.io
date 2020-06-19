const recipe = document.getElementById('recetario')
const container = document.getElementById('container-car')
const template = document.getElementById('template')
const carrito = document.getElementById('carritoJs')
const idcar = document.getElementById('car-2')
const vaciarCarritoBtn = document.getElementById('vaciar-carrito')
const total=document.getElementById('precio')
let URL = window.location.pathname;

const newTemplate2 = document.getElementById('template2')


const comprarRecetario = (e) => {
    e.preventDefault()
    //Delegación para recipe-card__link
    if (e.target.classList.contains('recipe-card__link')) {
        const recetario = e.target.parentElement.parentElement
        //Enviamos el recetario seleccionado al carrito 
        leerDatos(recetario)
    }
}

let suma=0;
//Leer los datos del recetario
const leerDatos = (recetario) => {

    const infoRecipe = {
        imagen: recetario.querySelector('img').src,
        nombre: recetario.querySelector('.recipe-card__title').textContent,
        precio: recetario.querySelector('.precio').textContent,
        id: recetario.querySelector('a').getAttribute('data-id'),
        
        //id2: id, //1 + parseInt(id),
        //id3: id2.toString
    }

    suma=suma +parseInt(infoRecipe.id)
    infoRecipe.id= suma.toString()

   
    insertarCarrito(infoRecipe);

}


//Lo llevamos al otro Script para que desde ahí corra 

const insertarCarrito = (infoRecipe) => {
    
    guardarRecetarioLocalStorage(infoRecipe);
}

// const insertarCarrito = (infoRecipe) => {
//     guardarRecetarioLocalStorage(infoRecipe);
// }


function guardarRecetarioLocalStorage(Recipe) {
    let recetas;
    // newid=newid + parseInt(infoRecipe.id,10)
    //Toma el array vacio o no de Local
    recetas = obtenerLocalStorage();
    // Recipe.forEach(element => {
    
    //     num= num+parseInt(element.id,10)
    //     Recipe.id= num.toString()
    // });
    recetas.push(Recipe);

    localStorage.setItem('recetas', JSON.stringify(recetas));

}


function obtenerLocalStorage() {
    let recetasLS;
    // comprobamos si hay algo en localStorage
    if (localStorage.getItem('recetas') === null) {
        recetasLS = [];
    } else {
        recetasLS = JSON.parse(localStorage.getItem('recetas'));
    }

    return recetasLS;

}


const leerLocalStorage = () => {
    let recetasLS;
    recetasLS = obtenerLocalStorage()
    recetasLS.forEach((infoRecipe) => {
    
        const myNewTemplate = template.content.cloneNode(true)
        myNewTemplate.querySelector('div div').innerHTML = `<img src="${infoRecipe.imagen}" alt="" width="100px">`
        myNewTemplate.querySelector('h1').textContent = `${infoRecipe.nombre}`
        myNewTemplate.querySelector('p').textContent = `$ ${infoRecipe.precio} MXN`
        // myNewTemplate.querySelector('span').innerHTML = `<a href="#" class="borrar-curso" data-id="${infoRecipe.id}">X</a>`
        myNewTemplate.querySelector('span').innerHTML = `<img class="eliminar" src="/assets/img/eliminar1.png" alt=""> <a href="#" class="borrar-curso" data-id="${infoRecipe.id}">Eliminar</a>`
        document.getElementById('container-car').appendChild(myNewTemplate)
        // sumar(recetasLS.precio)
    })

}

// const precio2=()=>{
//     let precio=sumar();
//     const myTemplate= newTemplate2.content.cloneNode(true)
//     myTemplate.querySelector('span').textContent= `${precio}`
//     document.getElementById('js').appendChild(myTemplate)
// }


const precio = () => {

    let precio=sumar();
    const precio2= document.createElement('div');
    precio2.innerHTML = `<span id="precio"> $${precio}MXN </span>`
    // total.appendChild(precio2)
    let objetivo = document.getElementById('precio')
    objetivo.parentNode.replaceChild(precio2,objetivo)
}

//Va antes de precio XD
const sumar = () => {
    let total=0;
    let suma=obtenerLocalStorage();
   
    suma.forEach((info)=>{
        total=total+parseInt(info.precio,10);
    })
    return total;
}



function guardarRecetarioLocalStorage(Recipe) {
    let recetas;
    //Toma el array vacio o no de Local
    recetas = obtenerLocalStorage();
    recetas.push(Recipe);
    localStorage.setItem('recetas', JSON.stringify(recetas));
}

const eliminarCursos = (e) => {
    e.preventDefault();
    let recetario;
    let recetarioId;
    if (e.target.classList.contains('borrar-curso')) {
        e.target.parentElement.parentElement.parentElement.remove()
        recetario = e.target.parentElement.parentElement;
        recetarioId = recetario.querySelector('span a').getAttribute('data-id')
       
    }
    eliminarCursoLocalStorage(recetarioId)
    
}

const eliminarCursoLocalStorage = (recetarioId) => {
    let recetasLS;
    recetasLS = obtenerLocalStorage()
    
    recetasLS.forEach(function(recetaLS, index){
        
        if (recetaLS.id === recetarioId) {
            recetasLS.splice(index,1);
        }
    })
    
    
    localStorage.setItem('recetas', JSON.stringify(recetasLS))
    precio()
}

const vaciarCarrito = () => {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }
    return false
}

function redireccionar() {
    
    window.location = "/carrito.html";
}


const showconf = ()=>{
    
    // const confirmed=document.getElementById('confirmed');
    // confirmed.style.display='block';
}


//Eventos
const cargarEventListeners = () => {
    //Dispara cuando se presiona "Agregar carrito"
    
    if (URL === '/index.html'  || URL=== '/recetas.html'  || URL=== '/recetas/hotcakes.html'  || URL=== '/recetas/mugcake.html'
    || URL=== '/recetas/pay-manzana.html' || URL=== '/recetas/pizza.html' || URL=== '/recetas/quesadilla-vegana.html' || URL=== '/recetas/spagueti.html')  {
        recipe.addEventListener('click', comprarRecetario);
        

     }

    //Cuando se elimina un recetario del carrito
    if (URL === '/carrito.html') {
        container.addEventListener('click', eliminarCursos);
        document.addEventListener('DOMContentLoaded', leerLocalStorage);
        precio()
    }
    //Al vacir el carrito 
    // vaciarCarritoBtn.addEventListener('click',vaciarCarrito);
    //Al cargar el documento, mostrar LocalStorege
    //
    idcar.addEventListener('click', redireccionar);

    // vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}
cargarEventListeners();
