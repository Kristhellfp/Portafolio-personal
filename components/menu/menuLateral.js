function crearMenuLateral() {
    let menuLateralDiv = document.createElement('div');
    menuLateralDiv.className = "menu-lateral";

    // Herramientas de color
    let colorTools = document.createElement('div');
    colorTools.className = "color-tools";

    let colores = ["blue", "green", "yellow", "red", "black"];
    
    colores.forEach(color => {
        let colorDiv = document.createElement('div');
        colorDiv.className = `color-option ${color}`;
        colorTools.appendChild(colorDiv);
    });

    menuLateralDiv.appendChild(colorTools);

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

    menuLateralDiv.appendChild(listaProyectos);

    // Formulario de contacto al final
    let form = document.createElement('form');
    form.className = "contact-form";

    let inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.placeholder = 'Nombre';
    inputName.className = "form-input";

    let inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.placeholder = 'Correo';
    inputEmail.className = "form-input";

    let textarea = document.createElement('textarea');
    textarea.placeholder = 'Mensaje';
    textarea.className = "form-textarea";

    let submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.innerText = 'Enviar';
    submitButton.className = "form-button";

    form.appendChild(inputName);
    form.appendChild(inputEmail);
    form.appendChild(textarea);
    form.appendChild(submitButton);

    menuLateralDiv.appendChild(form);

    return menuLateralDiv;
}

// Exportamos la función
export { crearMenuLateral };
