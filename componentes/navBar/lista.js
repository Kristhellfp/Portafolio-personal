let contenedorHerramientas = document.createElement('div');
contenedorHerramientas.className = "contenedor-herramientas";


function crearHerramienta(nombre, numero) {
    let herramientaPequeña = document.createElement('div');
    herramientaPequeña.className = `herramienta-pequeña${numero}`;
    contenedorHerramientas.appendChild(herramientaPequeña);

    let areaHerramienta = document.createElement('div');
    areaHerramienta.className = `area-herramienta${numero}`;
    herramientaPequeña.appendChild(areaHerramienta);

    let tituloHerramienta = document.createElement('h3');
    tituloHerramienta.innerText = nombre;
    herramientaPequeña.appendChild(tituloHerramienta);
}


crearHerramienta("Herramienta 1", 1);
crearHerramienta("Herramienta 2", 2);
crearHerramienta("Herramienta 3", 3);
crearHerramienta("Herramienta 4", 4);
crearHerramienta("Herramienta 5", 5);
crearHerramienta("Herramienta 6", 6);

export { contenedorHerramientas };
