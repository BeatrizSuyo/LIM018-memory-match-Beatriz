// import App from './components/App.js';
import Data from './components/Data.js';
// document.getElementById('root').appendChild(App());

let root = document.getElementById('root');// contenedor general de vista 2

//creando boton jugar GO,vista1
let btn_jugar = document.getElementById("botonInicial");
btn_jugar.addEventListener("click", jugar);
let pageOne = document.getElementById("pag1");
let pageTwo = document.getElementById("root");
//funcion permite visualizar vista2//
function jugar(){
   pageOne.style.display = "none";
   root.style.display = "block";
}
//contenedor grande vista 2
const div_container_play = document.createElement('div');  
div_container_play.className = "div_container_play";
div_container_play.innerHTML = Data().outerHTML;//escribo sobre el contenedor

const vista2 = document.createElement('section');
vista2.className = 'vista2';
vista2.appendChild(div_container_play);
root.appendChild(vista2);

const img = document.createElement('img');
img.className = 'imgTitulo';
img.src = 'titulo Pokemon Match.png';
img.alt = 'Titulo Pokemon Match';
div_container_play.appendChild(img);

 /*===Pasos para girar las cartas si son iguales quedan visibles,si no se ocultan====  
        caso 1: Si volteo dos cartas iguales consecutivamente se deben quedar volteadas
        caso 2: Si volteo dos cartas que no son iguales se deben voltear de nuevo

        paso 0: verificar si la carta es la primera 
        paso 1: cuando volteo la primera carta guardo su id
        paso 2: cuando volteo la segunda carta guardo su id,verifico si el id es el mismo de la primera
        paso 3: si es el mismo id se quedan las dos volteadas de cara y si no se voltean ambas de espalda
      */

let primeraCartaSeleccionada = null; //al inicio no tiene valor
let segundaCartaSeleccionada = null;
let contadorDeCartasIguales = 0;//contador de par de cartas
const cards = document.querySelectorAll('.card');//validar card-selecciona todas de clase card

for (let i = 0; i < cards.length; i++) {
   cards[i].addEventListener('click', function (e) { //añadiendo evento escuchador a cada card
      
      cards[i].className +=' show';//agregando class show
      //console.log(cards[i].className);
      
      if (primeraCartaSeleccionada === null) { // si la primeraCartaSeleccionada esta vacia,volteamos la primera carta
         // e.target es el elemento/carta al cual le dimos click
         // element.closest(selector) //retorna el elemento padre mas cercano que encuentro con el selector
         primeraCartaSeleccionada = e.target.closest('.card');
         console.log( 'primera carta seleccionada',primeraCartaSeleccionada);
          
      } else { // si la primeraCartaSeleccionada no esta vacia estamos volteando la segunda carta
         console.log ('segunda carta',e.target.closest('.card'));
         segundaCartaSeleccionada = e.target.closest('.card');
         // console.log(e.target.closest('.card').className);  //muestra las clases card y show
         
         if (primeraCartaSeleccionada.id === segundaCartaSeleccionada.id) {  
            console.log('tarjetas iguales');
            contadorDeCartasIguales = contadorDeCartasIguales+1;
            //contador de cartas iguales  debe ser 9
            if(contadorDeCartasIguales == 9){
               gameOver()
            } else{primeraCartaSeleccionada = null;
                   segundaCartaSeleccionada = null;
              }
                            
         } else {
           console.log('no son iguales')
           const primeraCarta = primeraCartaSeleccionada;
            //console.log (primeraCarta);
           const segundaCarta = e.target.closest('.card');
           setTimeout(() => {
               primeraCarta.classList.remove('show')
               segundaCarta.classList.remove('show')
           }, 1000)                         

            primeraCartaSeleccionada = null;
            segundaCartaSeleccionada = null;
         }
      }
   })
}
//creando modal
const end = document.createElement('div');
end.setAttribute('id','end');
end.setAttribute('class', 'end');
const modal = document.createElement('section');
modal.setAttribute('class', 'modal');
end.appendChild(modal);
root.appendChild(end);

//funcion juego terminado
function gameOver (){
   end.style.display = "block";
   const cartasVolteadas = document.querySelectorAll('.card.show').length;
   if(cartasVolteadas === 18){   
      // alert('¡Felicitaciones,ganaste 🎉');
      const message = document.createElement('p');
      message.setAttribute('class','message');
      const winner = document.createTextNode(' WINNER '+' 🏆 ');
   
      message.appendChild(winner)
      modal.appendChild(message)
   }
}

//creando boton retroceder
let btnRetroceder = document.getElementById("retroceder");
btnRetroceder.addEventListener("click", () => {
  pageTwo.style.display = "none";
  pageOne.style.display = "block";
})

vista2.appendChild(btnRetroceder);


 


