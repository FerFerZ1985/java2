const expresion = /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/;
const email = 'correo@gmail.com';

const resultado = expresion.test(email);

console.log(resultado);