/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema. 
*/

const amigos = []; // Array vacio donde se guardaran los nombres de los amigos.

/* 
Conseguir las referencias de los elementos en el DOM en el proyecto
*/
const inputDeNombres = document.querySelector("#amigo"); // Referencia al inputo donde se ingresa el nombre del amigo.
const botonAñadirAmigos = document.querySelector("#button-add"); // Referencia al botón que tiene como función añadir a los amigos al juego.
const botonSortearAmigos = document.querySelector("#button-draw"); // Referencia al botón que tiene como función sortear los amigos de la lista de amigos.
const listaDeLosAmigos = document.querySelector("#listaAmigos"); // Referencia a la lista donde se mostraran los nombres.
const resultadoDelSorteo = document.querySelector("#resultado"); // Referencia al elemento lista donde se mostrara el resultado del sorteo.
const botonResetearJuego = document.querySelector("#button-reset"); // Referencia al botón que tiene como función resetear el juego.

/* Definiendo la función agregar tus amigos, que tiene como objetivo agregar los nombres de los 
amigos al array y actualizar la lista en la interfaz.*/
function agregarTusAmigos() {
    const nombre = inputDeNombres.value.trim(); // Aqui obtenemos el valor del input y eliminamos los espacios en blanco con "trim".
    if (nombre != "") { // Aqui se valida que el nombre no este vacio.
        amigos.push(nombre); // Agregamos el nombre al array de "amigos".
        enseñarAmigos(); // Aca se actualiza la lista visible en el DOM.
        inputDeNombres.value = ""; // Limpiamos el input después de agregar el nombre.
        inputDeNombres.focus(); // Hacemos que el input siga teniendo el foco o que siga seleccionado para seguir escribiendo en ella.
    } else {
        alert("Por favor, ingreso un nombre."); // Si el input esta vacio, se muestra una alerta mencionando esto.
    }
}

/* Esta función recorre el array "amigos" y agrega cada nombre a la lista de amigos en la interfaz.
Primero limpia el contenido anterior de la lista, luego crea un nuevo elemento lista para cada amigo,
lo coloca dentro de una lista desordenada con el id "listaAmigos", y lo muestra en orden numerado. */
function enseñarAmigos() {
    listaDeLosAmigos.innerHTML = ""; // Se limpia el contenido actual de la lista.
    amigos.forEach((amigo, index) => { // Recorre el arrar "amigos".
        const li = document.createElement("li"); // Aca se crea un nuevo elemento lista.
        li.textContent = `${index + 1}. ${amigo}` // A los nombres se le asigna como "1. Nombre". con el indice y el nombre agregado al array.
        listaDeLosAmigos.appendChild(li); // Se agrega la lista y la lista desordenada a la interfaz.
    });
}

/*
Esta función lo que hace es seleccionar un amigo aleatorio del array.
Si no hay amigos en el array, enseña una alerta al usuario. 
 */
function sortearAmigos() {
    if (amigos.length === 0) { // Se valida que haya al menos un amigo en el array. 
        alert("Debes agregar al menos un amigo."); // Si no hay amigos, se muestra una alerta al usuario.
        return; // Salimos de la función.
    }
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)]; // Se selecciona un nombre aleatorio del array "amigos".
    resultadoDelSorteo.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`; // Se muetra el resultado en el DOM correspondiente.
}

/* Esta función vacia el array "amigos", limpia la lista que es visible y el input,
y devuelve el foco al input. */
function resetearJuego() {
    amigos.length = 0; // Vacia el array "amigos".
    listaAmigos.innerHTML = ""; // Limpia el contenido de la lista en el DOM.
    resultadoDelSorteo.innerHTML = ""; // Limpia el resultado del sorteo.
    inputDeNombres.value = ""; // Limpia el valor del input.
    inputDeNombres.focus(); // Devuelve el foco al input.
}

/* 
Se agrega un eventlistener para todos los botones de la pagina, 
vinculandolo con la función correspondiente a cada una
*/
botonAñadirAmigos.addEventListener("click", agregarTusAmigos);
botonSortearAmigos.addEventListener("click",sortearAmigos);
botonResetearJuego.addEventListener("click", resetearJuego);




