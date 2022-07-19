// import Start from './components/Start.js';
// import App from './components/App.js';
// import final from './components/final.js';
import Data from './components/Data.js';
// document.getElementById('root').appendChild(Start());
// document.getElementById('root').appendChild(App());
//document.getElementById('root').appendChild(Data());

let root = document.getElementById('root');//el contenedor general de nuestra aplicación
//creando boton jugar GO,vista 1//
let btn_jugar = document.getElementById("botonInicial");
btn_jugar.addEventListener("click", jugar);
let pageOne = document.getElementById("pag1");
let pagetwo = document.getElementById("pag2");
//funcion permite visualizar vista 2//
function jugar(){
   pageOne.style.display = "none";
   root.style.display = "block";
}
//-------------------botn retroceder
// document.getElementById("root").style.display = "none";
// let botonRetroceder = document.getElementById("retroceder");
// botonRetroceder.addEventListener("click", () => {
//   document.getElementById("root").style.display = "none";
//   document.getElementById("pag1").style.display = "block";
// })
// div_container_play.appendChild(botonRetroceder);

// vista2.appendChild(botonRetroceder);
//----------------
const div_container_play = document.createElement('div'); //contenedor grande
div_container_play.className = "div_container_play";
div_container_play.innerHTML = Data().outerHTML;//escribo sobre el contenedor

const vista2 = document.createElement('section');
vista2.className = 'vista2';
vista2.appendChild(div_container_play);
root.appendChild(vista2);

const img = document.createElement('img');
img.className = 'imgTitulo';
img.src = 'titulo Pokemon Match.png';
img.alt = 'Pokemon Match';
div_container_play.appendChild(img);

 /*     Objetivo:
        caso 1: Si volteo dos cartas iguales consecutivamente se deben quedar volteadas
        caso 2: Si volteo dos cartas que no son iguales se deben voltear de nuevo

        paso 0: verificar si la carta es la primera o la segunda
        paso 1: cuando volteo la primera carta guardo su id
        paso 2: cuando volteo la segunda carta verifico si el id es el mismo de la primera
        paso 3: si es el mismo id se quedan las dos volteadas de cara y si no se voltean ambas de espalda
      */

let primeraCartaSeleccionada = null; // guarda el elemento de la ultima carta volteada
 
const cards = document.querySelectorAll('.card');//validar card
for (let i = 0; i < cards.length; i++) {
   cards[i].addEventListener('click', function (e) { //añadiendo evento escuchador a cada card
      // e.target es el elemento/carta al cual le dimos click

      cards[i].classList.toggle('show');

      if (primeraCartaSeleccionada === null) { // si la primeraCartaSeleccionada esta vacia estamos volteando la primera carta
         // element.closest(selector) //retorna el elemento padre mas cercano que encuentro con el selector
         // primeraCartaSeleccionada.setAttribute("name",nombre);
         primeraCartaSeleccionada = e.target.closest('.card');
          console.log(primeraCartaSeleccionada);
        
      } else { // si la primeraCartaSeleccionada no esta vacia estamos volteando la segunda carta

         if (primeraCartaSeleccionada.id=== e.target.id) {  
            console.log('tarjetas iguales');
              
         } else {
            console.log('no son iguales')
            const primeraCarta = primeraCartaSeleccionada;
            const segundaCarta = e.target;
            setTimeout(() => {
               primeraCarta.classList.remove('show')
               segundaCarta.closest('.card').classList.remove('show')
            }, 2000)                         

            primeraCartaSeleccionada = null;
         }
      }
   })
}







//-------------//al hacer inner al root con finaldeljuego reemplazo todo el root
// let finalDelJuego = document.createElement('div');
// finalDelJuego.innerHTML = "vuelve a intentarlo";
// finalDelJuego.innerHTML = final();
// root.appendChild(finalDelJuego);