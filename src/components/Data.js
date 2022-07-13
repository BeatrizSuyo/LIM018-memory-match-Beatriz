import pokemon from '../data/pokemon/pokemon.js';
const Data = () => {
  //array de objetos que están en pokemon.js
  const arr = pokemon.items;             //9
  //duplicar cartas
  const myArr = arr.concat(arr);        //18

  //barajar cartas
    function shuffle(myArr) {    
      return myArr.sort(() => { return Math.random() - 0.5 });//utilizamos sort para desordenar los 18 items mediante el método math.random
      }

    const sortedPokemon = shuffle(myArr);
    // console.log(sortedPokemon)

    //Dibujar cartas -tablero de cartas
    const cards = document.createElement('div');
    cards.className = "contenedor-cards";
    
    let name = "";
    let img = "";
    let color = "";
 
  
  for (let i = 0; i < sortedPokemon.length; i++) {
    //crear un elemento para la card de pokemon
    //agregar las propiedades de la card de pokemon
    //crear un elemento para la card de pokebola  
    //agregar las propiedades de la card de pokebola
    //carta de pokebola relacionada con una carta de pokemon
    //al darle click a la carta se debe voltear
    name = sortedPokemon[i].id;
    img = sortedPokemon[i].image;
    color = sortedPokemon[i].bgColor;
    
    
    

    //creando un div card,para guardar pokemon y pokebola
    const card =document.createElement('div');
    card.className = "card";

    //Creando div "pokemon -cara posterior(back face)"
    const pokemon = document.createElement("div");
    pokemon.className = "face back";
    pokemon.setAttribute("id", "back");

    //Creando variable para presentar imagen de pokemon
    const imagePokemon = document.createElement("img");
    imagePokemon.src = `${img}`;
    pokemon.appendChild(imagePokemon);

    //Creando div "pokebola-cara superior(front face)"  
    const pokebola = document.createElement("div");
    pokebola.className = "face front";
    //Creando variable para presentar imagen de pokebola
    const imagenPokebola  = document.createElement("img");
    imagenPokebola.src = "./img_pokebola1.png";
    pokebola.appendChild(imagenPokebola);

    
    
    card.appendChild(pokemon);
    card.appendChild(pokebola);
    cards.appendChild(card);
    
  
    
    
  };

  

  
  
  return cards;
}

export default Data;

//Creando div "pokemon -cara posterior(back face)"
// const pokemon = document.createElement("div");
// pokemon.className = "face back";
// pokemon.setAttribute("id", "back");
//Creando variable para presentar imagen de pokemon
// const imagePokemon = document.createElement("img");
//  imagePokemon.src = `${img}`;
// pokemon.appendChild(imagePokemon);

// Creando div "pokebola-cara superior(front face)"  
// const pokebola = document.createElement("div");
// pokebola.className = "face front";
// Creando variable para presentar imagen de pokebola
// const imagenPokebola  = document.createElement("img");
// imagenPokebola.src = "./img_pokebola1.png";
// pokebola.appendChild(imagenPokebola);

// cards.appendChild(pokemon);
// cards.appendChild(pokebola);

//---------------------------------------------------------------
// const pokemon = document.createElement('div');//creando div -cara posterior
    // pokemon.classList.add('card');
    // pokemon.style.backgroundColor = color;

    
    // const pokemonImage = `<img src="${img}" >           
    // <p class= "pokemon_name">${name.charAt(0).toUpperCase()}${name.slice(1)}</p>`; 
    // pokemon.innerHTML = pokemonImage 
    // // const pokemonImage = document.createElement("img");
    // // imagePokemon.src = `${img}`;    
    // // pokemon.appendChild(pokemonImage)
    // //cara superior-img pokebola
    // const pokebola = `<div class="card" id= "div-${name}">   
    // <img src="./img_pokebola1.png"  >    
    // <p class="pokemon_name"></p>                            
    // </div>`;

    // cards.innerHTML += `${pokemon.outerHTML} ${pokebola}`;//
    