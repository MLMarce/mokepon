let ataqueJugador;
let ataqueEnemigo;
let resultado;
let vidasEnemigo = 3;
let vidasJugador = 3;

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
    sectionSeleccionarAtaque.style.display="none";
    let sectionReiniciar = document.getElementById("reiniciar");
    sectionReiniciar.style.display="none";

    let botonMascotaJugador = document.getElementById("boton-mascota");
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
    
    
    let botonFuego = document.getElementById("boton-fuego");
    botonFuego.addEventListener("click", ataqueFuego);
    let botonAgua = document.getElementById("boton-agua");
    botonAgua.addEventListener("click", ataqueAgua);
    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.addEventListener("click", ataqueTierra);

    let botonReiniciar = document.getElementById("boton-reiniciar");
    botonReiniciar.addEventListener("click", reiniciarJuego);
    
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById("hipodoge");
    let inputCapipepo = document.getElementById("capipepo");
    let inputRatigueya = document.getElementById("ratigueya");
    let spanMascotaJugador = document.getElementById("mascota-jugador");
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
    
    if(inputHipodoge.checked == true) {
        spanMascotaJugador.innerHTML = "Hipodoge";
        sectionSeleccionarAtaque.style.display="block";
        sectionSeleccionarMascota.style.display="none";
    }
    else if(inputCapipepo.checked == true) {
        spanMascotaJugador.innerHTML = "Capipepo";
        sectionSeleccionarAtaque.style.display="block";
        sectionSeleccionarMascota.style.display="none";
    }
    else if(inputRatigueya.checked == true) {
        spanMascotaJugador.innerHTML = "Ratigueya";
        sectionSeleccionarAtaque.style.display="block";
        sectionSeleccionarMascota.style.display="none";
    } else {
        alert("Selecciona una mascota");
    }

    seleccionarMascotaEnemigo();
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1, 3);
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
    if(mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge";
    } else if(mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo";
    } else {
        spanMascotaEnemigo.innerHTML = "Ratigueya";
    }
}
function ataqueAgua() {
    ataqueJugador = "AGUA";
    ataqueAleatorioEnemigo();
}
function ataqueFuego() {
    ataqueJugador = "FUEGO";
    ataqueAleatorioEnemigo();
}
function ataqueTierra() {
    ataqueJugador = "TIERRA";
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);
    if(ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO";
    } else if(ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA";
    } else {
        ataqueEnemigo = "TIERRA";
    }
    combate();
}

function crearMensaje() {
    let sectionMensajes = document.getElementById("mensajes");
    let parrafo = document.createElement("p");
    parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + ", la mascota del enemigo ataco con " + ataqueEnemigo + " - " + resultado +"";
    sectionMensajes.appendChild(parrafo);
}

function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador");
    let spanVidasEnemigo = document.getElementById("vidas-enemigo");
    
    if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        resultado = "GANASTE";
        if(vidasEnemigo > 0) {
            vidasEnemigo -= 1;
        }
    } else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        resultado = "GANASTE";
        if(vidasEnemigo > 0) {
            vidasEnemigo -= 1;
        }
    } else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        resultado = "GANASTE";
        if(vidasEnemigo > 0) {
            vidasEnemigo -= 1;
        }
    } else if(ataqueJugador == ataqueEnemigo){
        resultado = "EMPATE";
    }
    else {
        resultado = "PERDISTE";
        if(vidasJugador > 0) {
            vidasJugador -= 1;
        }
    }
    spanVidasEnemigo.innerHTML = vidasEnemigo;
    spanVidasJugador.innerHTML = vidasJugador;

    revisarVidas();
}

function revisarVidas(){
    if(vidasEnemigo == 0) {
        crearMensajeFinal("Felicitaciones! GANASTE! 🎉😎");
        crearMensajeReinicio();
    } else if(vidasJugador == 0) {
        crearMensajeFinal("Que pena... PERDISTE 😓");
        crearMensajeReinicio();
    } else {
        crearMensaje();
    }
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("resultado");
    

    sectionMensajes.innerHTML = resultadoFinal;
    if(resultadoFinal == "Que pena... PERDISTE 😓") {
        sectionMensajes.style.color = "#f44";
    } else {
        sectionMensajes.style.color = "#af3";
    }

    let botonFuego = document.getElementById("boton-fuego");
    botonFuego.disabled = "true";
    let botonAgua = document.getElementById("boton-agua");
    botonAgua.disabled = "true";
    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.disabled = "true";
    
}
function crearMensajeReinicio() {
    let sectionReiniciar = document.getElementById("reiniciar");
    sectionReiniciar.style.display="block";
    let sectionMensajes = document.getElementById("mensajesFinal");
    let parrafo = document.createElement("p");
    parrafo.innerHTML = "Juego finalizado, por favor REINICIA para seguir jugando";
    parrafo.style.color = "#fa6";
    sectionMensajes.appendChild(parrafo);
}

function reiniciarJuego() {
    location.reload();
}

window.addEventListener("load", iniciarJuego);