let numeroSecreto=numeroAleatorio();
let intentos=1;
function numeroAleatorio(){
    return numero =Math.floor(Math.random()*10)+1;
}

function asignarTexto(texto,elemento){
    let componente=document.querySelector(elemento);
    componente.innerHTML=texto;
    return;
}

function verificarIntento(){
    let numeroUsuario= parseInt(document.getElementById('ValorUsuario').value);
    console.log(intentos);
    if(numeroUsuario === numeroSecreto){
        //Si acerto el numero
        asignarTexto(`Adivinaste el numero secreto en ${intentos} ${intentos ===1 ?'intento':'intentos'}`,'p');
    }else{
        //No acerto el numero
            if(numeroUsuario>numeroSecreto){
                asignarTexto('El numero es menor','p');
                documen.getElementById('reiniciar').removeAttribute('disabled');
            }else{
                asignarTexto('El numero es mayor','p');
            }
    }
    intentos++
}





console.log(numeroSecreto);

asignarTexto('Juego Del Numero Secreto','h1');
asignarTexto('Inserte un numero entre 1 y 10','p');

