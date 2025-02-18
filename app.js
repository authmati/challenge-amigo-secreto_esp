const amigos = [];

const inputDeNombres = document.querySelector("#amigo");
const botonAñadirAmigos = document.querySelector("#button-add");
const botonSortearAmigos = document.querySelector("#button-draw");
const listaDeLosAmigos = document.querySelector("#listaAmigos");
const resultadoDelSorteo = document.querySelector("#resultado");
const botonResetearJuego = document.querySelector("#button-reset");

function agregarTusAmigos() {
    const nombre = inputDeNombres.value.trim();
    if (!nombre) {
        alert("Por favor, ingresa un nombre.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado. Por favor, ingresa otro nombre.");
    } else {
        amigos.push(nombre);
        enseñarAmigos();
    }
    inputDeNombres.value = "";
    inputDeNombres.focus();
}

function enseñarAmigos() {
    const fragmento = document.createDocumentFragment();
    amigos.forEach((amigo, index) => {
        const lista = document.createElement("li");
        lista.innerHTML = `${index + 1}. ${amigo}`;
        fragmento.appendChild(lista);
    });
    listaDeLosAmigos.innerHTML = "";
    listaDeLosAmigos.appendChild(fragmento);
}

function sortearAmigos() {
    if (amigos.length === 0) { 
        alert("Debes agregar al menos un amigo.");
        return;
    }
    const amigoSecreto = amigos.splice(Math.floor(Math.random() * amigos.length), 1)[0];
    resultadoDelSorteo.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

function resetearJuego() {
    amigos.length = 0;
    listaDeLosAmigos.innerHTML = "";
    resultadoDelSorteo.innerHTML = ""; 
    inputDeNombres.value = "";
    inputDeNombres.focus();
}

botonAñadirAmigos.addEventListener("click", agregarTusAmigos);
botonSortearAmigos.addEventListener("click",sortearAmigos);
botonResetearJuego.addEventListener("click", resetearJuego);




