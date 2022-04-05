const personajes = [
    {
        id: 1,
        nombre: 'bob',
        tipo : 'principal',
        edad: 22
    },
    {
        id: 2,
        nombre: 'calamardo',
        tipo : 'principal',
        edad: 40
    },
    {
        id: 3,
        nombre: 'patricio estrella',
        tipo : 'secundario',
        edad: 22
    }
];

const searchById = () => {
    const id = parseInt(document.getElementById('id').value);
    const personaje = personajes.find(personaje => personaje.id == id);
    const row = `<p>${personaje.nombre}</p>`;
    document.getElementById("row").innerHTML = '';
    document.getElementById("row").insertAdjacentHTML('beforeend', row);
    alert(personaje.nombre);
}

const primera = () => {
    console.log("me ejecuto cuando se carga la pagina");
    
    console.log(personajes);

    const names = personajes.map(personaje => personaje.nombre);
    console.log(names);

    const promedio = (personajes.reduce((valAnterior, valActual) => valAnterior + valActual.edad, 0))/personajes.length;
    console.log(promedio);

    const principales = personajes.filter(personaje => personaje.tipo === 'principal');
    console.log(principales);
}

window.onload = primera();
