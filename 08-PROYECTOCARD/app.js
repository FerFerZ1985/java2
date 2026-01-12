const botones = document.querySelectorAll('#botones button');
const input = document.querySelector('.contenedor-input input');
const cards = document.querySelectorAll('.card');


//APLICAR FILTROS COMBINADOS
const aplicarFiltros = (e) => {
    if(e.type === 'click'){
        document.querySelector('#botones .active').classList.remove('active');
        e.target.classList.add('active');
    }

    const inputValor = input.value.toLowerCase();
    const filtro = document.querySelector('#botones .active').dataset.filtro;

    cards.forEach(card => {

        const matchCategoria = card.dataset.categoria === filtro || filtro === 'todo';
        const matchInput = card.dataset.nombre.toLowerCase().includes(inputValor);

        if(matchCategoria && matchInput){
            card.classList.remove('hide');
        }else{
            card.classList.add('hide');
        }

    })
}
//EVENTOS
botones.forEach(button => button.addEventListener('click', filtroCategorias));
input.addEventListener('keyup', filtroTexto);
