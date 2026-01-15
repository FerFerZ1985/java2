
//? Fetch API Es una interfaz moderna que proporciona una forma más simple y poderosa de realizar solicitudes HTTP en comparación con XMLHttpRequest. 

const url = 'https://pokeapi.co/api/v2/pokemon';

// fetch(url)
//     .then((respuesta) => respuesta.json())
//     .then((datos) => {
//         console.log(datos)
//     })
//     .catch((error) =>{
//         console.log(error)
//     })


const obtenerDatos = async() => {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    console.log(datos.results);
};
obtenerDatos();