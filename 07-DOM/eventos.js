// utilizar eventos en linea HTMOL

// const funcionClick = () => {
//     console.log('Hiciste Click');
// }

// Utilizar addEventListener
// const btn = document.getElementById('btn');

// btn.addEventListener('click', (e) => {
//     console.log(e.target);
// })

const boxs = document.querySelectorAll('.box');

boxs.forEach((box) => {
    box.addEventListener('Click', () => {
        console.log('Hicsite Clcik en una caja');
    });
})