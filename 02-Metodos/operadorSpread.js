// operador Spread - Permite capturar elementos de un arreglo u objeto y expandirlos en otros.
const lenguajes = ['JavaScript', 'SQL', 'PHP', 'Python', 'Java',];
const lenguajesFav = ['HTML', 'CSS', ...lenguajes];

//Objetos
const caracteristicas = {
    puesto: 'Desarrollador Web',
    lenguajes: ['JavaScript', 'HTML', 'CSS'],
    salario: '1200$'
}

const usuario = {
    nombre: 'Fernando',
    edad: '40',
    email: 'correo@correo.com',
    pass: '12345',
    ...caracteristicas
}

console.log(usuario);