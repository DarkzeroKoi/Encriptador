const textArea = document.querySelector(".traductor")
const mensaje = document.querySelector(".mensaje")
const noResult = document.querySelector(".noResult")
const transcriptor = document.querySelector("#trans")
const copy = document.querySelector(".copy")

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function encrypt(){
    const textoEncriptado = encriptar(textArea.value)
    console.log(textoEncriptado)
    mensaje.style.display = "block"
    mensaje.value = textoEncriptado
    textArea.value = "";
    noResult.style.display = "none";
    transcriptor.style.display="block";
    copy.style.display= "block";
}


function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function decrypt(){
    const textoDesencriptado = desencriptar(textArea.value)
    console.log(textoDesencriptado)
    mensaje.style.display = "block"
    mensaje.value = textoDesencriptado
    textArea.value = "";
    noResult.style.display = "none";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

copy.onclick = function() {
    navigator.clipboard.writeText(mensaje.value)
    alert("Texto copiado a tu clipboard")
}