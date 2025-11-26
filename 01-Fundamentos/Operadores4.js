/**Operadores logicos
 *      && And -Se tienen que aplicar las dos condicinoes
 *      || Or - Se aplica una de las dos condiciones
 *       | Not -
 *      ?? Nullish Coolescing - NUevo operador, mejora del operador OR
 */

const edad = 18;
const acceso = true;

const comprobacion = edad >= 18
                                ? 'Puede accesder' 
                                : 'No puede acceder';

console.log(comprobacion);