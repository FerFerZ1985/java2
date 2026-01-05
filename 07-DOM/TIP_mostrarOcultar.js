
const btn = document.getElementById('btn');
const box = document.querySelector('.box');


// Forma #1
// btn.addEventListener('click', () =>{
//     if(box.style.display === 'none'){
//         box.style.display = 'flex';
//     }else{
//         box.style.display = 'none';
//     }
// });


// Forma #2
btn.addEventListener('click', () =>{
    box.classList.toggle('hide');
});