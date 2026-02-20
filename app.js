// CREAZIONE TAVOLI
const selectNumeroTavolo = document.getElementById("numeroTavolo");
for(let i=1;i<=9;i++){
  selectNumeroTavolo.innerHTML += `<option value="${i}">${i}</option>`;
}
for(let i=1;i<=6;i++){
  selectNumeroTavolo.innerHTML += `<option value="T${i}">T${i}</option>`;
}

// FUNZIONE ORARIO
function oraCorrente(){
  const now = new Date();
  return now.getHours()+":"+String(now.getMinutes()).padStart(2,'0');
}

// TOGGLE CATEGORIE
function toggleMenu(id){
  const el = document.getElementById(id);
  el.style.display = el.style.display === "block" ? "none" : "block";
}
function toggleNota(id){
  const el = document.getElementById(id);
  el.style.display = el.style.display === "block" ? "none" : "block";
}

// QUANTITÀ
function piu(id){
  const el = document.getElementById(id);
  el.innerText = parseInt(el.innerText) + 1;
}
function meno(id){
  const el = document.getElementById(id);
  let v = parseInt(el.innerText);
  if(v > 0) el.innerText = v - 1;
}

// =============================================
// MAPPA COMPLETA DEI PRODOTTI
// formato: [nomeVisibile, idHTML, reparto]
// =============================================
const PRODOTTI = [
  // CUCINA - Entrantes
  ["Albondigas",            "albondigas",          "cucina"],
  ["Barchetta",             "barchetta",           "cucina"],
  ["Burrata",               "burrata",             "cucina"],
  ["Carpaccio",             "carpaccio",           "cucina"],
  ["Lasaña",                "lasana",              "cucina"],
  ["Provolone",             "provolone",           "cucina"],
  ["Olive Verdi",           "oliveverdi",          "cucina"],
  ["Tomino",                "tomino",              "cucina"],
  ["Tortilla",              "tortilla",            "cucina"],
  // CUCINA - Postres
  ["Panna Cotta",           "pannacotta",          "cucina"],
  ["Tiramisù",              "tiramisu",            "cucina"],
  ["Tarta de Queso",        "tartadequeso",        "cucina"],

  // PIZZERIA - Pizza
  ["Capricciosa",           "capricciosa",         "pizzeria"],
  ["Cuatro Quesos",         "cuatroquesos",        "pizzeria"],
  ["Diavola",               "diavola",             "pizzeria"],
  ["Marinara",              "marinara",            "pizzeria"],
  ["Margherita",            "margherita",          "pizzeria"],
  ["Prosciutto e Funghi",   "prosciuttofunghi",    "pizzeria"],
  ["Pinsa Speciale (Pizza)","pinsaspeciale_pizza", "pizzeria"],
  // PIZZERIA - Pinsa
  ["Anchoas",               "anchoas",             "pizzeria"],
  ["Bacalao",               "bacalao",             "pizzeria"],
  ["Cabra",                 "cabra",               "pizzeria"],
  ["Calabaza",              "calabaza",            "pizzeria"],
  ["Ceps",                  "ceps",                "pizzeria"],
  ["Mortadella",            "mortadella",          "pizzeria"],
  ["Pollo",                 "pollo",               "pizzeria"],
  ["Paletilla",             "paletilla",           "pizzeria"],
  ["Pinsa Speciale",        "pinsaspeciale",       "pizzeria"],
  ["Setas",                 "setas",               "pizzeria"],
  ["Tetilla",               "tetilla",             "pizzeria"],
  ["Trufa",                 "trufa",               "pizzeria"],
  ["Vegetariana",           "vegetariana",         "pizzeria"],
  // PIZZERIA - Postres (pinsa dolci)
  ["Pinsa Nutella",         "pinsanutella",        "pizzeria"],
  ["Pinsa Siciliana",       "pinsasiciliana",      "pizzeria"],

  // BAR - Bebidas
  ["Agua con gas",          "aguacongas",          "bar"],
  ["Agua grande",           "aguagrande",          "bar"],
  ["Agua pequeña",          "aguapeq",             "bar"],
  ["Alhambra Roja",         "alhambraroja",        "bar"],
  ["Aperol Spritz",         "aperolspritz",        "bar"],
  ["Aquarius",              "aquarius",            "bar"],
  ["Campari Spritz",        "camparispritz",       "bar"],
  ["Campari",               "campari",             "bar"],
  ["Cafè Solo",             "cafesolo",            "bar"],
  ["Cafè Solo Descafeinado","cafesolodec",         "bar"],
  ["Cafè con Leche",        "cafeleche",           "bar"],
  ["Cafè con Leche Des.",   "cafelechedec",        "bar"],
  ["Cortado",               "cortado",             "bar"],
  ["Cortado Descafeinado",  "cortadodec",          "bar"],
  ["Carajillo",             "carajillo",           "bar"],
  ["Cava Botella",          "cavabotella",         "bar"],
  ["Cava Copa",             "cavacopa",            "bar"],
  ["Cerasauolo",            "cerasauolo",          "bar"],
  ["Clara",                 "clara",               "bar"],
  ["Caña Copa",             "canacopa",            "bar"],
  ["Caña Pequeña",          "canapeq",             "bar"],
  ["Mediana 1925",          "mediana1925",         "bar"],
  ["Mediana TOST. 0 Alc.",  "medianatost",         "bar"],
  ["Mediana 0 Alc.",        "mediana0",            "bar"],
  ["Cocacola",              "cocacola",            "bar"],
  ["Cocacola 0",            "cocacola0",           "bar"],
  ["Fanta",                 "fanta",               "bar"],
  ["Garnatxa Blanca Copa",  "garnatxablancacopa",  "bar"],
  ["Garnatxa Blanca Bott.", "garnatxablancabott",  "bar"],
  ["Garnatxa Tinta Copa",   "garnatxatintacopa",   "bar"],
  ["Garnatxa Tinta Bott.",  "garnatxatintabott",   "bar"],
  ["Gin Hendrix",           "ginhendrix",          "bar"],
  ["Gin Mare",              "ginmare",             "bar"],
  ["Lambrusco Rosè Copa",   "lambruscorosecopa",   "bar"],
  ["Lambrusco Rosè Bott.",  "lambruscorosebott",   "bar"],
  ["Lambrusco Otello",      "lambruscoOtello",     "bar"],
  ["Magnum Trebbiano",      "magnumtrebbiano",     "bar"],
  ["Negroni",               "negroni",             "bar"],
  ["Nero D'Avola Copa",     "nerodavolacopa",      "bar"],
  ["Nero D'Avola Bott.",    "nerodavolabott",      "bar"],
  ["Nestea",                "nestea",              "bar"],
  ["Pinot Grigio Copa",     "pinotgrigiocopa",     "bar"],
  ["Pinot Grigio Bott.",    "pinotgrigiobott",     "bar"],
  ["Trebbiano Copa",        "trebbianocopa",       "bar"],
];

// INVIO ORDINE
function inviaOrdine(){
  const numero    = document.getElementById("numeroTavolo").value;
  const divisione = document.getElementById("divisione").value;
  const tavoloFinale = numero.startsWith("T") ? numero : numero + divisione;
  const uscita = document.getElementById("uscitaPiatti").value;

  const ordine = {
    tavolo: tavoloFinale,
    ora: oraCorrente(),
    uscita: uscita,
    items: [],
    cucinaCompleto: false,
    pizzeriaCompleto: false,
    barCompleto: false,
    completato: false,
    oraCompletato: ""
  };

  PRODOTTI.forEach(([nome, id, reparto]) => {
    aggiungiProdotto(nome, id, reparto, ordine);
  });

  if(ordine.items.length === 0){
    alert("Inserisci almeno un prodotto!");
    return;
  }

  const ordiniRef = ref(db, "ordini");
  push(ordiniRef, ordine);

  mostraOrdine(ordine);
  resetCampi();
}

function aggiungiProdotto(nome, id, reparto, ordine){
  const el = document.getElementById(id);
  if(!el) return;
  const qty = parseInt(el.innerText);
  const notaEl = document.getElementById("nota_"+id);
  const nota = notaEl ? notaEl.value.trim() : "";
  if(qty > 0){
    ordine.items.push({ nome, qty, reparto, nota });
  }
}

function mostraOrdine(ordine){
  const div = document.createElement("div");
  div.className = "ordine";
  let html = ordine.items.map(item =>
    `${item.qty} x ${item.nome}${item.nota ? `<br><small>→ ${item.nota}</small>` : ""}`
  ).join("<br>");
  div.innerHTML = `<strong>Tavolo ${ordine.tavolo}</strong> - ${ordine.ora}<br>${html}`;
  document.getElementById("listaOrdini").prepend(div);
}

function resetCampi(){
  document.querySelectorAll(".qtyBox span").forEach(el => el.innerText = 0);
  document.querySelectorAll(".notaBox").forEach(el => el.value = "");
}