// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");

if (svgPlaceholder) {
  document.querySelector("#vaelg-start").addEventListener("click", vaelgStart);
  document.querySelector("#Vaelg-aktivitet").addEventListener("click", vaelgAktivitet);
  document.querySelector("#Vaelg-slut").addEventListener("click", vaelgSlut);

  function vaelgStart() {
    console.log("vælg start");
    document.querySelector("#besked").textContent = "Du valgte start.";
    document.querySelector(".stjerne").style.translate = "0% 0%";
  }

  function vaelgAktivitet() {
    console.log("vælg aktivitet");
    document.querySelector("#besked").textContent = "Du valgte aktivitet.";
    document.querySelector(".stjerne").style.translate = "33.4% 20%";
  }

  function vaelgSlut() {
    console.log("vælg slut");
    document.querySelector("#besked").textContent = "Du valgte slut.";
    document.querySelector(".stjerne").style.translate = "64% 35%";
  }
}

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}

// Formularside
const kildeSelect = document.querySelector("#kilde");
const andetKilde = document.querySelector("#andet-kilde");

if (kildeSelect && andetKilde) {
  kildeSelect.addEventListener("change", function () {
    if (kildeSelect.value === "andet") {
      andetKilde.hidden = false;
      andetKilde.required = true;
      andetKilde.focus();
    } else {
      andetKilde.hidden = true;
      andetKilde.required = false;
      andetKilde.value = "";
    }
  });
}

//opsamlingsside
// Hent oplysninger fra formularen
const params = new URLSearchParams(window.location.search);

// Find billetten
const billet = document.querySelector("#billet");

if (billet) {
  // Vis brugerens oplysninger
  document.querySelector("#vis-navn").textContent = params.get("navn") || "";

  document.querySelector("#vis-deltagere").textContent = params.get("deltagere") || "";

  // Oversæt dekorationerne
  const dekorationer = params.getAll("dekoration");

  //denne del bestemmer hvad der står under "Kreative aktiviteter" når formularen er udfyldt
  const dekorationNavne = {
    "eget-glas": "Dekorere eget glas",
    "genbrugt-glas": "Dekorere et glas fra eventet",
    lanterne: "Dekorere en vandlanterne",
    ingen: "Ingen kreative aktiviteter",
  };

  document.querySelector("#vis-dekoration").textContent = dekorationer.map((valg) => dekorationNavne[valg] || valg).join(", ") || "Ingen valgt";

  // Skift billetdesign
  const stemning = params.get("stemning");

  if (stemning === "varmt-lys") {
    billet.classList.add("solnedgang");
  } else if (stemning === "stjernelys") {
    billet.classList.add("stjernelys");
  }
}