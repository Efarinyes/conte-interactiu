const historia = [
  {
    text: "Benvingut, jugues amb nosaltres?",
    si: 1,
    no: 7,
  },
  {
    text: "De  bon matí el Sr. petit i eixerit fa les maletes. L'ajudes?",
    si: 2,
    no: 2,
  },
  {
    text: "El senyor petit i eixerit va cap a Sants a gafar el tren, vas amb ell?",
    si: 3,
    no: 7,
  },
  {
    text: "Compreu els bitllets per anar a Madrid, l'Ave es mes car i us deixa a Atocha, el de tota la vida, mes barat, us deixa a Chamartin. On Aneu? ( si = Atocha, no = Chamartin )",
    si: 5,
    no: 4,
  },
  {
    text: "Sou a Chamartin, els hotels son de pena, et quedes?",
    si: 6,
    no: 7,
  },
  {
    text: "Sou a Atocha i busqueu taxi per anar al hotel. Segeuixes amb el Sr. Eixerit?",
    si: 6,
    no: 7,
  },
  {
    text: "El Sr. eixerit i tu us instaleu a l'hotel i demà a buscar a feina. Vols repetr la història?",
    si: 1,
    no: 7,
  },
  {
    text: "Adeu!!. Si vols repetir la història, prem si!",
    si: 1,
    no: 8,
  },
  { text: "Mercès per jugar", si: -1, no: -1 },
];

let nom = prompt("Com Et dius?");
let pagina = 0;
let nomPublic = document.querySelector("#nom");
nomPublic.textContent = `Benvingut: ${nom}`;
let conjuntPaginas = [];

let text = document.querySelector(".text");
text.textContent = historia[pagina].text;
let sumPag = document.querySelector(".pagina");
sumPag.textContent = `Pagina: ${pagina}`;

conjuntPaginas.push(pagina);
let pintaPag = document.querySelector("#pagines");
pintaPag.textContent = `Has estat a la pagina: ${conjuntPaginas}`;

function ferSi() {
  pagina = historia[pagina].si;

  if (pagina === 8) {
    document.getElementById("btnSi").disabled = true;
    document.getElementById("btnNo").disabled = true;
  }

  text.textContent = historia[pagina].text;
  let sumPag = document.querySelector(".pagina");
  sumPag.textContent = `Pagina: ${pagina}`;
  conjuntPaginas.push(pagina);
  pintaPag.textContent = `Has estat a la pagina: ${conjuntPaginas}`;
}
function ferNo() {
  pagina = historia[pagina].no;

  if (pagina === 8) {
    document.getElementById("btnNo").disabled = true;
    document.getElementById("btnSi").disabled = true;
  }
  text.textContent = historia[pagina].text;
  let sumPag = document.querySelector(".pagina");
  sumPag.textContent = `Pagina: ${pagina}`;
  conjuntPaginas.push(pagina);
  pintaPag.textContent = `Has estat a la pagina: ${conjuntPaginas}`;
}
