function crearMenuLateral() {
    let menuLateralDiv = document.createElement('div');
    menuLateralDiv.className = "menu-lateral";

    let nombreUsuario = document.createElement('h2');
    nombreUsuario.innerText = "kristel";
    menuLateralDiv.appendChild(nombreUsuario);

    // Lista de proyectos
    let listaProyectos = document.createElement('ul');
    listaProyectos.className = "lista-proyectos";

    let proyectos = [
        { nombre: "Proyecto 1", url: "https://github.com/proyecto1" },
        { nombre: "Proyecto 2", url: "https://github.com/proyecto2" },
        { nombre: "Proyecto 3", url: "https://github.com/proyecto3" }
    ];

    proyectos.forEach(proyecto => {
        let li = document.createElement('li');
        li.className = "proyecto-item";

        let link = document.createElement('a');
        link.href = proyecto.url;
        link.innerText = proyecto.nombre;
        link.className = "proyecto-link";

        li.appendChild(link);
        listaProyectos.appendChild(li);
    });

    // Center the list
    listaProyectos.style.display = 'flex';
    listaProyectos.style.flexDirection = 'column';
    listaProyectos.style.alignItems = 'center';

    menuLateralDiv.appendChild(listaProyectos);

    // Create a form at the bottom
    let form = document.createElement('form');
    form.className = "contact-form";

    let input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Escribe tu mensaje';
    input.className = "form-input";

    let submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.innerText = 'Enviar';
    submitButton.className = "form-button";

    form.appendChild(input);
    form.appendChild(submitButton);
    menuLateralDiv.appendChild(form);

    return menuLateralDiv;
}

// Exportamos la función
export { crearMenuLateral };
