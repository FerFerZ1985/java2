// Destructuracion de Objetos - Permite obtener elementos/Propiedades de un arreglo/objeto y yguardarlo en variable

//OBJETOS
const persona = {
    nombre: 'Fernando',
    edad: 40,
    email: 'correo@correo.com'
};

// const {nombre, email} = persona;

//FUNCION 
const mostrar = ({nombre, email}) => {
    console.log(nombre, email);
}

mostrar(persona);