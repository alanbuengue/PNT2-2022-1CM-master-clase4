const start = async () => {
    try{    
        const {info, results} = await getCharactersByStringFiltro('?');   
        showPersonajes(results);        
        setPagination(info);
    }
    catch(err){
        console.error(err);
    }
}
function setPagination(info){
    console.log("Paginador previo:",info.prev);
    console.log("Paginador next:",info.next);
    document.getElementById("paginator").innerHTML="";
    if(info.prev!==null){ //si hay un previo agrego boton
        const previousButton=`<li class="page-item"><a class="page-link" href="javascript:search('${info.prev}');">Previous</a></li>`;
        document.getElementById("paginator").innerHTML= previousButton;
    }
    if(info.next!==null){
        const nextButton=`<li class="page-item"><a class="page-link" href="javascript:search('${info.next}');">Next</a></li>`;        
        document.getElementById("paginator").innerHTML+= nextButton;
    }    
}
function showPersonajes(characters){
    document.getElementById("cards").innerHTML = '';
    //antes de cargar resultados verifico que existan
    if(characters){
        characters.forEach(character => {       
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
    }else{
        document.getElementById("cards").insertAdjacentHTML('beforeend', '<h5 class="text-white">sin resultados</h5>');
    }    
}
const getFilter = () =>{    
    let filtros=new Array();
    let name =document.getElementById('name').value;
    let status =document.getElementById('status').value;
    let species =document.getElementById('species').value;
    if(status!='todos'){
        filtros['status']=status;
    } 
    if(species!='todos'){
        filtros['species']=species;
    } 
    if(name){
        filtros['name']=name;
    } 
    return filtros;
}
const search = async (page) => {       
    let filtros=getFilter();
    let stringFiltro="?";
    for (let atributo in filtros){
        stringFiltro+='&'+atributo+'='+filtros[atributo];
    }      
    const {info, results} = await getCharactersByStringFiltro(stringFiltro,page);    
    showPersonajes(results);     
    setPagination(info);// con cada busqueda actualizo la paginacion segun lo que devuelve info.
    
}
const getCharactersByStringFiltro = async (stringFiltro,page) =>{
    page=page || 'https://rickandmortyapi.com/api/character'+stringFiltro; //si no pasan una pagina especifica, muestro la primera+sus filtros
    const response = await fetch(page);
    const {info, results} = await response.json(); 
    return {info, results};    
}
window.onload = start();

/*OLD
const getCharacters = async (atributo,valor) =>{
    const response = await fetch('https://rickandmortyapi.com/api/character?'+atributo+'='+valor);
    const {info, results} = await response.json(); 
    return {info, results};    
}

const searchByName = async () =>{
    let name =document.getElementById('name').value;
    const {info, results} = await getCharacters('name',name);    
    showPersonajes(results);  
}
const filtrarPorEstado = async () =>{
    let tipoFiltro =document.getElementById('status').value;
    let atributo ='status'; 
    if(tipoFiltro ==='todos'){
        atributo = '';    
        tipoFiltro='';
    }
    const {info, results} = await getCharacters(atributo,tipoFiltro);    
    showPersonajes(results);  
}*/