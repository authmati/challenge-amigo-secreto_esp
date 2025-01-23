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
    const nombre = inputDeNombres.value.trim(); // Obtiene y limpia el valor del input eliminado los espacios con trim.
    if (!nombre) { // Verifica que el campo no este vacio.
        alert("Por favor, ingresa un nombre.");
        return;
    }
    if (amigos.includes(nombre)) { // Verifica que los nombres no se repitan.
        alert("Este nombre ya ha sido agregado. Por favor, ingresa otro nombre.");
    } else {
        amigos.push(nombre); // Agrega el nombre al array si este es valido.
        enseñarAmigos();
    }
    inputDeNombres.value = ""; // Limpia el input.
    inputDeNombres.focus(); // Enfoca el input, se queda marcado.
}

/* Esta función recorre el array "amigos" y agrega cada nombre a la lista de amigos en la interfaz.
Primero limpia el contenido anterior de la lista, luego crea un nuevo elemento lista para cada amigo,
lo coloca dentro de una lista desordenada con el id "listaAmigos", y lo muestra en orden numerado. */
function enseñarAmigos() {
    const fragmento = document.createDocumentFragment(); // Crea un fragmento de documento, que es un objeto liviano que no esta asociado al DOM.
    amigos.forEach((amigo, index) => { // Recorre el array de "amigos".
        const lista = document.createElement("li"); // Crea un nuevo elemento lista.
        lista.innerHTML = `${index + 1}. ${amigo}`; // Asigna los datos a la lista.
        fragmento.appendChild(lista); // Agrega la lista al fragmento anteriomente creado.
    });
    listaDeLosAmigos.innerHTML = ""; // Limpia la lista de amigos actual en el DOM.
    listaDeLosAmigos.appendChild(fragmento); // Agrega el fragmento en el DOM.
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
    const amigoSecreto = amigos.splice(Math.floor(Math.random() * amigos.length), 1)[0]; // Se selecciona un nombre aleatorio del array "amigos".
    resultadoDelSorteo.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`; // Se muestra el resultado en el DOM correspondiente.
}

/* Esta función vacia el array "amigos", limpia la lista que es visible y el input,
y devuelve el foco al input. */
function resetearJuego() {
    amigos.length = 0; // Vacia el array "amigos".
    listaDeLosAmigos.innerHTML = ""; // Limpia el contenido de la lista en el DOM.
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




