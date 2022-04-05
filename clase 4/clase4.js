const personajes = [
    {
        id: 1,
        nombre: 'bob',
        tipo : 'principal',
        imagen: 'https://media.revistagq.com/photos/5ca5f6a77a3aec0df5496c59/master/w_1600%2Cc_limit/bob_esponja_9564.png',
        edad: 22
    },
    {
        id: 2,
        nombre: 'calamardo',
        tipo : 'principal',
        imagen: 'https://pbs.twimg.com/media/CHvjFOjWEAIJBI-.jpg',
        edad: 40
    },
    {
        id: 3,
        nombre: 'patricio estrella',
        tipo : 'secundario',
        imagen: 'https://www.diariodesevilla.es/2020/08/11/television/Patricio-mejor-amigo-Bob-Esponja_1491161304_124640813_667x880.png',
        edad: 22
    }
];


const start = () => {
    console.log('soy lo primero que se ejecuta');
    personajes.forEach((personaje) => {
        const card = `
            <div class = "col-4 mt-4">
            <div class="card" style="width: 18rem;">
            <img src="${personaje.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${personaje.nombre}</h5>
              <p class="card-text">${personaje.edad}.</p>
            </div>
            </div>
            </div>`;
        document.getElementById('cards').insertAdjacentHTML('beforeend', card);
    })
}



window.onload = start();