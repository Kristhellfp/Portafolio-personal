import { header } from "../header/header.js";
import { dataProyectos } from "../../data/data.js";

function proyectos() {
    let section = document.createElement('section');
    section.className = 'section-proyectos';
    section.appendChild(header());
    section.appendChild(listaProyectos());

    return section;
}

function listaProyectos() {
    let div = document.createElement('div');
    div.className = "lista-proyectos";  // Ajuste en la clase

    dataProyectos.forEach((proyecto) => {
        div.appendChild(item(proyecto.nombre, proyecto.githubPage, proyecto.github, proyecto.stacks));
    });

    return div;
}

function item(texto, github, githubPage, stacks) {
    let divLista = document.createElement('div');
    divLista.className = "div-item";

    let a = document.createElement('a');
    a.className = "https://kristhellfp.github.io/proyecto-formularios2/";
    a.href = githubPage;
    a.innerText = texto;  // Ajuste para que use el nombre del proyecto
    divLista.appendChild(a);

    let stack = document.createElement('div');
    stack.innerText = `[${stacks.join(', ')}]`;  // Ajuste para que use las tecnologías
    divLista.appendChild(stack);

    let btnGithub = document.createElement('a');
    btnGithub.className = "btn-github";
    btnGithub.href = "https://kristhellfp.github.io/proyecto-formularios2/";
    btnGithub.innerText = "Github";
    divLista.appendChild(btnGithub);

    return divLista;
}

export { proyectos };
