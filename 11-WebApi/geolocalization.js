
const gps = navigator.geolocation;

const sucess = async(posicion) =>{
    const latitude = posicion.coords.latitude;
    const longitude = posicion.coords.longitude;
    
    let respuesta = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
    let data = await respuesta.json();
    
    console.log(data);
    
    console.log(`Mi direccion es: ${data.address.state}, ${data.address.country}`);
} 

const error = (e) =>{
    console.log(e);
}

const options = {
    // maximunAge - Tiempo que se guarda en cache la posicion
    // timeout - Tiempo en devolver la data
    // enableHightAccuracy - Activa la presicion en la que obtendra la ubicacion

    maximunAge: 0,
    timeout: 2000,
    enableHightAccuracy: true
}

gps.getCurrentPosition(sucess, error, options);