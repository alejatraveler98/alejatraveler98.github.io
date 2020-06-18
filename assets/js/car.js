// const carrito= document.getElementById('carrito')
//const recipe= document.getElementById('recetario')
// const lista = document.querySelector('#lista-carrito tbody') 
// const vaciarCarritoBtn= document.getElementById('vaciar-carrito')
// const idcar= document.getElementById('car-2')
//Funciones

const template2 = document.getElementById('template')


// const insertarCarrito = (infoRecipe) => {
    
//     recetasLS = obtenerLocalStorage()
//     recetasLS.forEach((infoRecipe) => {
//         // newid=newid + parseInt(infoRecipe.id,10)
//         // console.log(newid);
        
//         const myNewTemplate = template2.content.cloneNode(true)
//         myNewTemplate.querySelector('div div').innerHTML = `<img src="${infoRecipe.imagen}" alt="" width="100px">`
//         myNewTemplate.querySelector('h1').textContent = `${infoRecipe.nombre}`
//         myNewTemplate.querySelector('p').textContent = `${infoRecipe.precio}`
//         myNewTemplate.querySelector('span').innerHTML = `<a href="#" class="borrar-curso" data-id="${infoRecipe.id}">X</a>`
//         document.getElementById('container-car').appendChild(myNewTemplate)
//         // sumar(recetasLS.precio)
//     })
//     guardarRecetarioLocalStorage(infoRecipe);
//     console.log('Estoy en otra pagina');
// }




//Función que añade el curso al carrito
// const comprarRecetario = (e) => {
//     e.preventDefault()
//     //Delegación para recipe-card__link
//     if(e.target.classList.contains('recipe-card__link')){
//         const recetario= e.target.parentElement.parentElement
//         //Enviamos el recetario seleccionado al carrito 
//         leerDatos(recetario)
//     }
// }

//Leer los datos del recetario
// const leerDatos= (recetario)=>{
//     const infoRecipe={
//         imagen: recetario.querySelector('img').src,
//         nombre: recetario.querySelector('.recipe-card__title').textContent,
//         precio: recetario.querySelector('.precio').textContent,
//         id    : recetario.querySelector('a').getAttribute('data-id')
//     }
    
//     insertarCarrito(infoRecipe);

// }

// const insertarCarrito = (infoRecipe) => {
//     const row= document.createElement('tr');
//     row.innerHTML = `
    
//     <td id="car">
//         <img src="${infoRecipe.imagen}" alt="">
//     </td>
//     <td>${infoRecipe.nombre}</td>
//     <td>${infoRecipe.precio}</td>
//     <td>
//         <a href="#" class="borrar-curso" data-id="${infoRecipe.id}">X</a>
//     </td>
//     `;
//     lista.appendChild(row);
//     guardarRecetarioLocalStorage(infoRecipe);

// }

// const eliminarCursos = (e) => {
//     e.preventDefault()
//     let recetario;
//     let recetarioId;
//     if (e.target.classList.contains('borrar-curso')) {
//         e.target.parentElement.parentElement.remove()
//         recetario= e.target.parentElement.parentElement
//         recetarioId= recetario.querySelector('a').getAttribute('data-id')
//     }
//     eliminarCursoLocalStorage(recetarioId)
// }


// const vaciarCarrito = () => {
//     while (lista.firstChild) {
//         lista.removeChild(lista.firstChild)
//     }
//     return false
// }

// function guardarRecetarioLocalStorage (Recipe) {
//     let recetas;
//     //Toma el array vacio o no de Local
//     recetas= obtenerLocalStorage();
//     recetas.push(Recipe);

//     localStorage.setItem('recetas', JSON.stringify(recetas) );
// }

// // Comprueba que haya elementos en Local Storage
// function obtenerLocalStorage() {
//     let recetasLS;
//     // comprobamos si hay algo en localStorage
//     if(localStorage.getItem('recetas') === null) {
//         recetasLS = [];
//     } else {
//         recetasLS = JSON.parse(localStorage.getItem('recetas') );
//     }
    
//     return recetasLS;
    
// }


// //Imprime los cursos de Local Storage en el carrito
// const leerLocalStorage = () => {
//     let recetasLS;
//     recetasLS= obtenerLocalStorage()

//     recetasLS.forEach((infoRecipe)=> {
    
//     const row= document.createElement('tr');
//     row.innerHTML = `
    
//     <td id="car">
//         <img src="${infoRecipe.imagen}" alt="">
//     </td>
//     <td>${infoRecipe.nombre}</td>
//     <td>${infoRecipe.precio}</td>
//     <td>
//         <a href="#" class="borrar-curso" data-id="${infoRecipe.id}">X</a>
//     </td>
//     `;
//     lista.appendChild(row);
//     })
// }

//Elimina el curso por el ID en el LocalStorage
// const eliminarCursoLocalStorage = (recetarioId) => {
//     let recetasLS;
//     recetasLS=obtenerLocalStorage()
//     recetasLS.forEach((recetaLS,index) => {
//         if (recetaLS.id === recetarioId) {
//             recetasLS.splice(index,1)
//         }
//     })

//     localStorage.setItem('recetas',JSON.stringify(recetasLS))
//     // console.log(recetasLS);      
// }


// function redireccionar(){
//     console.log('funcion');
//     window.location="/carrito.html";
//   } 
  
//Eventos
//const cargarEventListeners= () => {
    //Dispara cuando se presiona "Agregar carrito"
    //recipe.addEventListener('click',comprarRecetario);
    //Cuando se elimina un recetario del carrito
    //carrito.addEventListener('click', eliminarCursos);
    //Al vacir el carrito 
    // vaciarCarritoBtn.addEventListener('click',vaciarCarrito);
    //Al cargar el documento, mostrar LocalStorege
    //document.addEventListener('DOMContentLoaded',leerLocalStorage);
    //
    // console.log(idcar);
    // idcar.addEventListener('click',redireccionar)
//}
// cargarEventListeners();


