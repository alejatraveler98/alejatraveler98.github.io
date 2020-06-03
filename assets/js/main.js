let URLActual = window.location.pathname;

// alert(URLActual)

if(URLActual === '/recetas.html'){
    console.log('Si')
}else{
    console.log('No');
}


const showMenu = (toggleId, navId)=>{
    const toggle= document.getElementById(toggleId),
          nav = document.getElementById(navId)

          if(toggle && nav){
              toggle.addEventListener('click', ()=>{
                    nav.classList.toggle('show')            
              })
          }
}

showMenu('main-menu-toggle','main-nav')