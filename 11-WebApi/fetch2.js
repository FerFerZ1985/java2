
const contenedor = document.getElementById('contenedor');

const url = 'https://programming-memes-images.p.rapidapi.com/v1/memes';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '9a4963e385msh9b55fb9a3928b8dp1389f8jsn9b7fe5e47aaa',
		'x-rapidapi-host': 'programming-memes-images.p.rapidapi.com'
	}
};

fetch(url, options)
    .then((respuesta) => respuesta.json())
    .then(datos => {
        console.log(datos);

        datos.forEach(memes => {
            let images = document.createElement('img');
            images.src = `${memes.image}`;
            contenedor.appendChild(images);
        });
    }).catch((error) =>{
        console.log(error);
    })