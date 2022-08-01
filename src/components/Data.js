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
    //====Pasos para crear contenedor de cards===//
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
    card.setAttribute("id", name);

    //Creando div "pokemon -cara posterior(back face)"
    const pokemon = document.createElement("div");
    pokemon.className = "face back";
    pokemon.setAttribute("id", name);

    //Creando variable para presentar imagen de pokemon
    const imagePokemon = document.createElement("img");
    imagePokemon.src = `${img}`;
    pokemon.appendChild(imagePokemon);

    //Creando div "pokebola-cara superior(front face)"  
    const pokebola = document.createElement("div");
    pokebola.className = "face front";

    //Creando variable para presentar imagen de pokebola
    const imagePokebola  = document.createElement("img");
    imagePokebola.src = "./img_pokebola_front.png";
    imagePokebola.setAttribute("id",name);
    pokebola.appendChild(imagePokebola);
 
    card.appendChild(pokemon);
    card.appendChild(pokebola);
    cards.appendChild(card);
    
  }

  return cards;
}

export default Data;

