
const contenedor = document.getElementById('game');
const emojis = ['🍕','🍔', '🍫', '🍣', '🍖', '🥗', '🧁', '🍰'];
const cards = emojis.concat(emojis);
const aleatorio = cards.sort(() => 0.5 - Math.random());
let bloqueado = false;


// Funcion que permite crear Cards
const crearCards = () =>{
    aleatorio.forEach(card =>{
        const elemento = document.createElement('div');
        elemento.className = 'card activo';
        elemento.innerHTML = card;
        contenedor.appendChild(elemento);
        elemento.addEventListener('click', manejarClick);
    });
}

// Funcion para manejar los click en cada cards
const manejarClick = (e) =>{
    if(bloqueado) return;
    e.target.classList.add('activo');
    const cardActivas = document.querySelectorAll('.card.activo:not(.match)');
    
    if(cardActivas.length === 2){
        bloqueado = true;
        setTimeout(() =>{
            verificarCoincidencia(cardActivas);
            bloqueado = false;
        }, 500);
    }
}

// Verificar coincidencia de cards
const verificarCoincidencia = (cardActivas) =>{
    if(cardActivas[0].innerHTML === cardActivas[1].innerHTML){
        cardActivas[0].classList.add('match');
        cardActivas[1].classList.add('match');
    }else{
        cardActivas[0].classList.remove('activo');
        cardActivas[1].classList.remove('activo');
    }

    if(document.querySelectorAll('.match').length === cards.length){
        alert('¡Ganaste!');
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
}


crearCards();

// Mostrar cards y ocultar a los 2 segundos
setTimeout(() =>{
    const cards = document.querySelectorAll('.card');
    cards.forEach(card =>{
        card.classList.remove('activo');
    })
}, 2000);