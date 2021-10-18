let linkInicioBrand = document.getElementById("linkInicioBrand");
let inicioBrand = document.getElementById("inicio");

linkInicioBrand.addEventListener("click", function () {
  inicio.scrollIntoView();
});

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
  window.open(
    "https://www.linkedin.com/in/andres-bozzani-63b43754?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bab5TbXrRR9SAXQCL%2F8iWZg%3D%3D"
  );
}

function clickGitHub() {
  window.open("https://github.com/Cholo0022");
}

function clickInstagram() {
  window.open("https://www.instagram.com/cholo0022/");
}
