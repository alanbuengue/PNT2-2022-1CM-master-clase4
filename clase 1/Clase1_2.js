const usuarios = [
    {
        id: 1,
        username: 'jon',
        pass : '1234'
    },
    {
        id: 2,
        username: 'bob',
        pass: '1234'
    }
];


const frutas = ["anana", "granada", "durazno"];
//sort me ordena el array o por numeros o por letras
frutas.sort();
console.log(frutas);

//filter filtra y me devuelve un array con los items encontrados
const frutaFiltrada = frutas.filter(fruta => fruta.length >= 6);
console.log(frutaFiltrada);

const nums = [10, 8, 7];

//map recorre el array y me devuelve una variable y la mete dentro de un array nuevo
const mult = nums.map(num => num*2);
console.log(mult);

//reduce reduce el array a un valor
const promedio = (nums.reduce((valPrevio, valActual) => valPrevio + valActual, 0))/nums.length;
console.log(promedio);

const login = () => {
    console.log("se ejecuta login");
    const username = document.getElementById("username").value;
    const pass = document.getElementById("pass").value;

    const logged = usuarios.find(usuario => usuario.username === username && usuario.pass === pass);
    // for(let i = 0; i < usuarios.length; i++) {
    //     if(usuarios[i].username === username && usuarios[i].pass === pass){
    //         logged = usuario[i];
    //         break;
    //     }
    // } == .find

    //forEach, find, filter, map, reduce

    // usuarios.forEach(usuario => {
    //     usuario.username === username && usuario.pass === pass ? logged = true : null;
    // })

    // let i = 0;
    // while(i < usuarios.length && logged === false) {
    //     if(username === usuarios[i].username && pass === usuarios[i].pass) {
    //         logged = true;
    //     }
    //     i++;
    // }
    logged ? console.log("logueado :D!") : console.log("usuario o contra incorrectas");
    console.log(username, pass);
}