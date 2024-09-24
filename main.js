import { navBarDiv } from "./components/navBar/navBar.js";
import { navBarDiv } from "./components/project/project.js";

/*COMPONENTES DE LA PÁGINA*/
let DOM = document.querySelector("#root");

/*navBar*/
let navBar = document.createElement('section');
navBar.className = 'nav-bar'
navBar.appendChild(navBarDiv);
DOM.appendChild(navBar);

let project = document.createElement('section');
project.className = "project";
project. appendChild (proyectos());
DOM.appendChild(project);

