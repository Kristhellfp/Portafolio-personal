function proyectos(){

    let section = document.createElement('section');
    section.className = 'section-proyectos';
    section.appendChild(header());
    section.appendChild(item());


    return section;
}

function header(){
    let div = document.createElement('div');
    div.className = 'header';
    
    let h2 = document.createElement('h2');
    h2.innerText = "Proyectos";
    div.appendChild(h2);

    let btn = document.createElement('div');
    btn.innerHTML = "Github";
    div.appendChild(btn);


    return div;
}

function item(){
    let div = document.createElement('div');
    div.innerText = "Item de Lista";

    return div;
}


export {proyectos}