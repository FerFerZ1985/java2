// setTimeout(): Permite ejectuar una funcion despues de cierto tiempo.
// const saludo = () => {
//     alert('Hola mundo');    
// }

// setTimeout(saludo, 3000)

//EJEMPLO 
// const timer = setTimeout(() => {
//     window.open('', 'Publicidad', 'width=800, height=800');
// }, 5000)

// clearTimeout(timer);

//etInterval(): Permite ejectuar una funcion cada cierto tiempo
// setInterval(() => {
//     console.log('Hola Mundo');
// }, 2000)

//EJEMPLO
let contador = 0;
let timer = setInterval(() => {
    console.log(contador);
    contador++;
}, 5000)

clearInterval(timer);
