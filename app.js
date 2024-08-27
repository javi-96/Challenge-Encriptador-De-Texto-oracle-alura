const textIngresado = document.getElementById('textoIngresado');
const textRecibido = document.getElementById('textoRecibido');


/* La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */


function btnEncriptar() {
    const textoEncriptado = encriptar(textIngresado.value);
    textRecibido.value = textoEncriptado
    textIngresado.value = '';
}


function encriptar(stringEncriptada) {
    let llaves = [['a','ai'],['e','enter'],['i,imes'],['o','ober'],['u','ufat']];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let index = 0; index < llaves.length; index++) {
        if (stringEncriptada.includes(llaves[index][0])) {
            stringEncriptada = stringEncriptada.replaceAll(llaves[index][0],llaves[index][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textIngresado.value);
    textRecibido.value = textoEncriptado
    textIngresado.value = '';
}


function desencriptar(stringDesencriptada) {
    let llaves = [['a','ai'],['e','enter'],['i,imes'],['o','ober'],['u','ufat']];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let index = 0; index < llaves.length; index++) {
        if (stringDesencriptada.includes(llaves[index][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(llaves[index][1],llaves[index][0])
        }
    }
    return stringDesencriptada
}

async function btnCopiar() {
    try {
        await navigator.clipboard.writeText(textRecibido.value);
        alert("Texto copiado al portapapeles");
    } catch (err) {
        alert("Hubo un error al copiar el texto: " + err);
    }
}