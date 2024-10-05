import { navBarDiv } from "./components/navBar/navBar.js";
import { proyectos } from "./components/project/project.js";
import { crearMenuLateral } from "./components/menu/menuLateral.js";

/* Componentes de la página */
let DOM = document.querySelector("#root");

/* navBar */
let navBar = document.createElement('section');
navBar.className = "nav-bar";
navBar.appendChild(navBarDiv);
DOM.appendChild(navBar);

/* project */
let proyect = document.createElement('section');
proyect.className = "proyect";
proyect.appendChild(proyectos()); // <------- componente
DOM.appendChild(proyect);

/* Menú lateral */
let menuLateral = document.createElement('section');
menuLateral.className = "menu-lateral";
menuLateral.appendChild(crearMenuLateral()); // <------- añadimos el menú lateral
DOM.appendChild(menuLateral);
