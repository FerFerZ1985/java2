
const boxs = document.querySelectorAll('.box');
const btn = document.getElementById('btn');
const contenedor = document.getElementById('contenedor');


contenedor.addEventListener('click', (e) =>{
    if(e.target.className === 'box'){
        console.log('Le diste click al elemento: ', e.target.innerHTML);
    }
});

// boxs.forEach((box) =>{
//     box.addEventListener('click', (e) =>{
//         console.log('Le diste click al elemento: ', e.target.innerHTML);
//     });
// });


btn.addEventListener('click', () =>{

    // const nuevaCaja = document.createElement('div');
    // nuevaCaja.setAttribute('class', 'box');
    // nuevaCaja.innerHTML = 'Nuevo';
    // contenedor.appendChild(nuevaCaja);

    const nuevaCaja = `<div class="box">Nuevo</div>`;
    contenedor.innerHTML += nuevaCaja;

});