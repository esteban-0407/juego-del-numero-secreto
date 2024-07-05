

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function verificarIntento (){
let numerosDeUsuario = parseInt(document.getElementById('valorUsuario').value);

if(numerosDeUsuario === numeroSecreto){
    asignarTextoElemento('p', `acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
document.getElementById('reiniciar').removeAttribute('disabled');

}else{


    if(numerosDeUsuario > numeroSecreto){
        asignarTextoElemento('p', 'el numero secreto es menor');
    }else{
        asignarTextoElemento('p', 'el numero secreto es mayor');

    }
    intentos++;
limpiarCaja();
}
return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value ='';
    
}


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML =texto;

}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
  
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
             if (listaNumerosSorteados.includes(numeroGenerado)) {
                 return generarNumeroSecreto();
             } else {
                 listaNumerosSorteados.push(numeroGenerado);{
                return numeroGenerado;
             }
        }
    }

}
function condicionesIniciales(){
    asignarTextoElemento('h1','juego del numero secreto');
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
   
    limpiarCaja();
   
    condicionesIniciales();
   
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();




