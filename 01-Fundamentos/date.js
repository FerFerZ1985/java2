const fecha = new Date();

const dia = fecha.getDate();
const mes = fecha.getMonth();
const year = fecha.getFullYear();
const hora = fecha.getHours();
const min = fecha.getMinutes();
const seg = fecha.getSeconds();

console.log(`Dia: ${dia}, Mes: ${mes}, Year: ${year}, Hora: ${hora}, Min: ${min}, Segundos: ${seg}`);