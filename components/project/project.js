import { header } from "../header/header.js";
import { dataProyectos } from "../../data/data.js";

function proyectos(){

    let section = document.createElement('section');
    section.className = 'section-proyectos';
    section.appendChild(header());
    section.appendChild(listaProyectos());


    return section;
}

function listaProyectos(){
    let div = document.createElement('div');
    div.className = "Lista-proyectos";

    dataProyectos.forEach((proyecto)=>{
        div.appendChild( item(proyecto.nombre, proyecto.githubPage, proyecto.github, proyecto.stacks));
    });

    return div;
}


function item(texto, github, githubPage, stacks){
    let divLista = document.createElement('div');
    divLista.className = "div-item";
    
    let a = document.createElement('a');
    a.className = "link-github-page"
    a.href = "https://samjeronimo.github.io/Pryectos--Formulario/";
    a.innerText = "Proyectos-Formulario";
    divLista.appendChild(a);

    let stack = document.createElement('div');
    stack.innerText = "[js, css, html]";
    divLista.appendChild(stack);

    let btnGithub = document.createElement('a');
    btnGithub.className = "btn-github";
    btnGithub.href = "https://github.com/samjeronimo/Pryectos--Formulario";
    btnGithub.innerText = "Github";
    divLista.appendChild(btnGithub);

    return divLista;
}


export {proyectos};