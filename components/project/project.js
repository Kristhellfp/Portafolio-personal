function project(){

    let section = document.createElement ('section');
    section.innerText = "Hola, soy texto completo";

    return section;

} 

//función header
function header () {
    let div = document.createElement ('div');
    div.innerText = "header"

    let h2 = document.createElement ('h2');
    h2.innerHTML = "Proyectos";
    div.appendChild(h2);

    let btn = document.createElement ('div');
    btn.innerHTML = "Github";
    div.appendChild(btn);
    

    return div;
}





export {project}

