let linkInicio = document.getElementById("linkInicio");
let inicio = document.getElementById("inicio");

linkInicio.addEventListener("click", function () {
  inicio.scrollIntoView();
});

let linkSobreMi = document.getElementById("linkSobreMi");
let sobreMi = document.getElementById("sobreMi");

linkSobreMi.addEventListener("click", function () {
  sobreMi.scrollIntoView();
});

let linkContacto = document.getElementById("linkContacto");
let contacto = document.getElementById("contacto");

linkContacto.addEventListener("click", function () {
  contacto.scrollIntoView();
});

function clickLinkedin() {
  window.open("https://www.linkedin.com/in/andres-bozzani-63b43754/");
}

function clickGitHub() {
  window.open("https://github.com/Cholo0022");
}

function clickInstagram() {
  window.open("https://www.instagram.com/cholo0022/");
}

function clickGmail() {
  window.open("mailto:andres.bozzani@gmail.com");
}
