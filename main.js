import { navBarDiv } from "./componentes/navBar/navbar.js";
import { proyectos } from "./componentes/proyectos/project.js";
import { contactoSection } from "./componentes/navBar/formulario.js";
import { contenedorHerramientas } from "./componentes/navBar/lista.js"; 

let DOM = document.querySelector("#root");

let navBar = document.createElement('section');
navBar.className = "nav-bar";
navBar.appendChild(navBarDiv);
navBar.appendChild(contenedorHerramientas); 
navBar.appendChild(contactoSection);

DOM.appendChild(navBar);

let proyectSection = document.createElement('section');
proyectSection.className = "proyect";
proyectSection.appendChild(proyectos());

DOM.appendChild(proyectSection);
