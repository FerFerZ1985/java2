const boxs = document.querySelectorAll('.box');
const btn = document.getElementById('btn');
const contenedor = document.getElementById('contenedor');



boxs.forEach((box) => {
    box.addEventListener('click', (e) => {
        console.log('Le diste click al elemento: ', e.target.innerHTML);
    })
})

btn.addEventListener('click', () => {
    // const nuevaCaja = document.createElement('div');
    // nuevaCaja.setAttribute('class', 'box');
    // nuevaCaja.innerHTML = 'Nuevo';
    // contenedor.appendChild(nuevaCaja);

    const nuevaCaja = `<div class="box">caja 4</div>`;  
    contenedor.innerHTML += nuevaCaja;

});