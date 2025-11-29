/**
 * Block Scope o variables de tipo bloque
 *      -Pertenecen a variables declaradas const y let dentro de un bloque {}
 *      -Solo se pueden acceder dentro del bloque
 */

if(true){
    const nombre = 'jorge';
    console.log(nombre);   
}

console.log('nombre');