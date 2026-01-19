
const inputFile = document.getElementById('inputFile');
const contenedor = document.getElementById('contenedor-file');

inputFile.addEventListener('change', () =>{

    for (const a of inputFile.files) {
        const reader = new FileReader();
        reader.readAsDataURL(a);

        reader.addEventListener('load', (e)=>{

            const img = document.createElement('img');
            img.setAttribute('src', e.currentTarget.result);
            contenedor.appendChild(img);

        });
    }

});