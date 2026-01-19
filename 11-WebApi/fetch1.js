
const contenedor = document.getElementById('contenedor');

const url = 'https://dragonball-api.com/api/characters';

const cargaDatos = async() =>{
    try{
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        console.log(datos.items);

        datos.items.forEach(dato => {
            contenedor.innerHTML += `
                <div>
                    <img src="${dato.image}">
                    <h2>${dato.name}</h2>                
                </div>
            `
        });

    }catch(error){
        console.log(error);
    }

};
cargaDatos();