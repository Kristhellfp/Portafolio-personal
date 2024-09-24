let navBarDiv = document.createElement('div');
navBarDiv.className = "nav-bar-div";

let imgLogo = document.createElement('img');
imgLogo.src = "https://static.vecteezy.com/system/resources/previews/008/506/404/non_2x/contact-person-red-icon-free-png.png";
imgLogo.className = "img-logo";
navBarDiv.appendChild(imgLogo);

let h2 = document.createElement('h2');
h2.innerText = "Kriss";
navBarDiv.appendChild(h2);

export { navBarDiv }