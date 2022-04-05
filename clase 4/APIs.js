const getCharacters = async (atributo,valor) =>{
    const response = await fetch('https://rickandmortyapi.com/api/character?'+atributo+'='+valor);
   const {info, results} = await response.json(); 
   return {info, results};
    
}


const start = async () => {
    try{
    //const response = await getCharacters('','');
    const {info, results} = await getCharacters('','');
   /* console.log(results);
    results.forEach((character) => {
        const card = `
            <div class = "col-4 mt-4">
            <div class="card" style="width: 18rem;">
            <img src="${character.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${character.name}</h5>
              <p class="card-text">Origen : ${character.origin.name}.</p>
              <p class="card-text">Estado : ${character.status}.</p>
              <p class="card-text">Especie : ${character.species}.</p>
            </div>
            </div>
            </div>`;
        document.getElementById('cards').insertAdjacentHTML('beforeend', card);
    })*/
    showPersonajes(results);

    }
    catch(err){
        console.error(err);
    }
}



const filtrarPorEstado = async () =>{
    const tipoFiltro =document.getElementById('status').value;
    let atributo ='status'; 
    if(tipoFiltro ==='todos'){
        atributo = '';    
        tipoFiltro='';
    }
    const {info, results} = await getCharacters(atributo,tipoFiltro);
    
   showPersonajes(results);

  
   
}

function showPersonajes(characters){
    document.getElementById("cards").innerHTML = '';
    characters.forEach(character => {
       console.log('el eprsonaje es:',character);
        const card = `
            <div class = "col-4 mt-4">
            <div class="card" style="width: 18rem;">
            <img src="${character.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${character.name}</h5>
              <p class="card-text">Origen : ${character.origin.name}.</p>
              <p class="card-text">Estado : ${character.status}.</p>
              <p class="card-text">Especie : ${character.species}.</p>
            </div>
            </div>
            </div>`;
        document.getElementById("cards").insertAdjacentHTML('beforeend', card);
    })
}





const filtrarPorTipo = () =>{
    let tipoFiltrado = document.getElementById("tipo").value
    const filtrados = personajes.filter(personaje => personaje.tipo === tipoFiltrado);

    personajes.forEach(personaje =>{
        document.getElementById("row").innerHTML = "";
    })

    filtrados.forEach(personaje => {
        const cartaNueva = `<div class="card m-4" style="width: 18rem;">
        <img src="${personaje.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 id= "tituloCarta" class="card-title">
                ${personaje.nombre}
          </h5>
          <p id="textoCarta" class="card-text">
                Edad: ${personaje.edad} <br>
                Lugar De Nacimiento: ${personaje.lugarDeNacimiento} <br>
                Tipo: ${personaje.tipo} 
          </p>
        </div>
      </div>`;

        document.getElementById("row").insertAdjacentHTML('beforeend', cartaNueva);
    });
}



window.onload = start();