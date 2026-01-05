
//? Utilizar eventos en linea HTML
const funcionClick = () =>{
    console.log('Hiciste click en el boton')
}


//? Utilizar addEventListener
const btn = document.getElementById('btn');

btn.addEventListener('click', (e) =>{
    console.log(e.target);
})


// Multiples Elementos
const boxs = document.querySelectorAll('.box');

boxs.forEach((box) =>{
    box.addEventListener('click', (e) =>{
        console.log('Le diste click al elemento: ', e.target.innerHTML);
    });
})