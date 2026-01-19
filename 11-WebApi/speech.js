
const textarea = document.querySelector('textarea');
const select = document.querySelector('select');
const btn = document.querySelector('button');

let synth = speechSynthesis;

// Funcion que muestra voces en select
const voces = () =>{
    for (let voice of synth.getVoices()) {
        
        let option = `<option value="${voice.name}">${voice.name}</option>`;
        select.insertAdjacentHTML('beforeend', option);

    }
}

synth.addEventListener('voiceschanged', voces);


// Funcion que crea texto a voz
const textoAVoz = (texto) =>{
    let utterance = new SpeechSynthesisUtterance(texto);

    for (let voz of synth.getVoices()) {
        if(voz.name === select.value){
            utterance.voice = voz;
        }
    }

    synth.speak(utterance);
}


// Evento para Boton
btn.addEventListener('click', (e) =>{
    e.preventDefault();
    textoAVoz(textarea.value);
});