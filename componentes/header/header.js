function header(){
    let divHeader = document.createElement('div');
    divHeader.className = 'header';
    
    let h2 = document.createElement('h2');
    h2.innerText = "Proyectos";
    divHeader.appendChild(h2);

    let btn = document.createElement('div');
    btn.innerHTML = "Github";
    divHeader.appendChild(btn);


    return divHeader;
}

export {header};