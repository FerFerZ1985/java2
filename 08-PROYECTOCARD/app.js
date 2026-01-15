const botones = document.querySelectorAll('#botones button');
const input = document.querySelector('.contenedor-input input');
const contenedorCards = document.getElementById('contenedor-cards');

const modal = document.getElementById('modal');
const imgModal = document.getElementById('img-modal');
const closeBtn = document.getElementById('close');

const data = [
    { category: 'peliculas', img: 'img/movie1.jfif', name: 'deadpool & wolverine' },
    { category: 'peliculas', img: 'img/movie2.jfif', name: 'intensamente 2' },
    { category: 'peliculas', img: 'img/movie3.jfif', name: 'avengers' },
    { category: 'peliculas', img: 'img/movie4.jfif', name: 'joker' },
    { category: 'peliculas', img: 'img/movie5.jfif', name: 'super mario bros la pelicula' },
    { category: 'peliculas', img: 'img/movie6.jfif', name: 'dr strange' },
    { category: 'peliculas', img: 'img/movie7.jfif', name: 'it' },
    { category: 'series', img: 'img/series1.jfif', name: 'house of dragon' },
    { category: 'series', img: 'img/series2.jfif', name: 'ted lasso' },
    { category: 'series', img: 'img/series3.jfif', name: 'breaking bad' },
    { category: 'series', img: 'img/series4.jfif', name: 'games of thrones' },
    { category: 'series', img: 'img/series5.jfif', name: 'bette call saul' },
    { category: 'series', img: 'img/series6.jfif', name: 'friends' },
    { category: 'videojuegos', img: 'img/videogame1.jfif', name: 'zelda breath of the wild' },
    { category: 'videojuegos', img: 'img/videogame2.jfif', name: 'assassins creed shadows' },
    { category: 'videojuegos', img: 'img/videogame3.jfif', name: 'god of war' },
    { category: 'videojuegos', img: 'img/videogame4.jfif', name: 'super mario galaxy' },
    { category: 'videojuegos', img: 'img/videogame5.jfif', name: 'mariokart deluxe' },
    { category: 'videojuegos', img: 'img/videogame6.jfif', name: 'red dead redemption' },
    { category: 'videojuegos', img: 'img/videogame7.jfif', name: 'ghos of the tsushima' },
];

//Carga de cards
window.addEventListener('load', () => {
    data.sort(() => Math.random() - 0.5);

    const crearCards = (data) => {
        
        let cardsHTML = '';
        data.forEach(item => {
            cardsHTML += `
            <div class="card" data-categoria="${item.category}" data-nombre="${item.name}">
                <img src="${item.img}" alt="">
                <h6>${item.name}</h6>
            </div>
            `;
        })
        return cardsHTML;
    }

    contenedorCards.innerHTML = crearCards(data);
})

//APLICAR FILTROS COMBINADOS
const aplicarFiltros = (e) => {
    const cards = document.querySelectorAll('.card');
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

//Funciones Modal
const abrirModal = (e) => {
    if(e.target.className === 'card'){
        const imgUrl = e.target.children[0].src;
        modal.style.display = 'block';
        imgModal.src = imgUrl;
    }
}

const cerrarModal = () => {
    modal.style.display = 'none';
}


//EVENTOS
botones.forEach(button => button.addEventListener('click', aplicarFiltros));
input.addEventListener('keyup', aplicarFiltros);
contenedorCards.addEventListener('click', abrirModal);
closeBtn.addEventListener('click', cerrarModal);

