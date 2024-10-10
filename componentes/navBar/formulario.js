let contactoSection = document.createElement('section');
contactoSection.className = "Contacto";

let encabezadoContacto = document.createElement('h2');
encabezadoContacto.innerText = "Contacto";
contactoSection.appendChild(encabezadoContacto);

let contenedor1 = document.createElement('div');
contenedor1.className = "contenedor1";
contactoSection.appendChild(contenedor1);

let contenedor2 = document.createElement('div');
contenedor2.className = "contenedor2";
contactoSection.appendChild(contenedor2);

let contenedor3 = document.createElement('div');
contenedor3.className = "contenedor3";
contactoSection.appendChild(contenedor3);

let botonEnviar = document.createElement('div');
botonEnviar.innerText = "Enviar";
botonEnviar.className = "boton-enviar";
contactoSection.appendChild(botonEnviar);

export { contactoSection };