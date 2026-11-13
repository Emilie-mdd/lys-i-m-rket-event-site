// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}

document.querySelector("#vaelg-start").addEventListener("click", vaelgStart);
function vaelgStart() {
  console.log("vælg start");
  document.querySelector("#besked").textContent = "Du valgte start.";
  document.querySelector(".stjerne").style.translate = "0% 0%";
}

document.querySelector("#Vaelg-aktivitet").addEventListener("click", vaelgAktivitet);
function vaelgAktivitet() {
  console.log("vælg aktivitet");
  document.querySelector("#besked").textContent = "Du valgte aktivitet.";
  document.querySelector(".stjerne").style.translate = "33.4% 20%";
}

document.querySelector("#Vaelg-slut").addEventListener("click", vaelgSlut);
function vaelgSlut() {
  console.log("vælg slut");
  document.querySelector("#besked").textContent = "Du valgte slut.";
  document.querySelector(".stjerne").style.translate = "64% 35%";
}
