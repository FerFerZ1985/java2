
const url = 'https://pokeapi.co/api/v2/pokemon';

axios.get(url)
    .then((respuesta) => {
        console.log(respuesta.data.results)
    })
    .catch((error) =>{
        console.log(error)
    })


const obtenerDatos = async() => {
    const respuesta = await axios.get(url);
   
    console.log(respuesta.data.results);
};
obtenerDatos();