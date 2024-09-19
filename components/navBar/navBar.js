let navBarDiv = document.createElement('div');
navBarDiv.className = "nav-bar-div";

let imgLogo = document.createElement('img');
imgLogo.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F005%2F545%2F335%2Fnon_2x%2Fuser-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg&f=1&nofb=1&ipt=e0e20de5428508864c161be10c69f1845fc6f7a91936aaf39856b80f42cdb8c2&ipo=images";
imgLogo.className = "img-logo";
navBarDiv.appendChild(imgLogo);

let h2 = document.createElement('h2');
h2.innerText = "Kriss";
navBarDiv.appendChild(h2);

export { navBarDiv };
