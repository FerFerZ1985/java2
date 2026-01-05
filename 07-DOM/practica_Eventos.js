
const contenedor = document.getElementById('contenedor');
const btn = document.getElementById('btn');


// Agregar elementos
btn.addEventListener('click', () =>{

    const nuevaCaja = `<div class="box">Nuevo</div>`;
    contenedor.innerHTML += nuevaCaja;

});


// Eventos
['click', 'dblclick'].forEach((evt) =>{
    contenedor.addEventListener(evt, (e) =>{
        if(e.target.classList.contains('box')){

            if(e.type === 'click'){
                e.target.classList.toggle('active');
            }else if (e.type === 'dblclick'){
                contenedor.removeChild(e.target);
            }
        }
    });
});