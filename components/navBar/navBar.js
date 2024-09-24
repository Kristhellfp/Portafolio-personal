let navBarDiv = document.createElement('div');
navBarDiv.className = "nav-bar-div";

let imgLogo = document.createElement('img');
imgLogo.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F008%2F506%2F404%2Fnon_2x%2Fcontact-person-red-icon-free-png.png&f=1&nofb=1&ipt=234ed7805c04af15f07a355e4d02e82de413a2fba6ca0bbd0d0345b186015c1a&ipo=images";
imgLogo.className = "img-logo";
navBarDiv.appendChild(imgLogo);

let h2 = document.createElement('h2');
h2.innerText = "Kriss";
navBarDiv.appendChild(h2);

export { navBarDiv }