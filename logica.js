
const historia = [
    {
        "text": "Benvingut, jugues amb nosaltres?",
        "si": 1,
        "no": 7
    },
    {
        "text": "Un senyor petit i eixerit de Santa Coloma, ha d'anar a Madrid decidit, ha de treballar. L'acompanyes en el seu viatge?",
        "si": 2,
        "no": 7
    },
    {
        "text": "El senyor petit i eixerit va cap a Sants a gafar el tren, l'acompanyes?",
        "si": 3,
        "no": 7
    },
    {
        "text": "Compreu els bitllets per anar a Madrid, l'Ave es mes car i us deixa a Atocha, el de tota la vida, mes barat, us deixa a Chamartin. On Aneu? ( si = Atocha, no = Chamartin )",
        "si": 5,
        "no": 4
    },
    {
        "text": "Sou a Chamartin, els hotels son de pena, et quedes?",
        "si": 6,
        "no": 7
    },
    {
        "text": "Sou a Atocha i busqueu taxi per anar al hotel. Segeuixes amb el Sr. Eixerit?",
        "si": 6,
        "no": 7

    },
    {
        "text": "El Sr. eixerit i tu us instaleu a l'hotel i demà a buscar a feina. Vols repetr la història?",
        "si": 1,
        "no":7
    },
    {
        "text": "Adeu!!. Si vols repetir la història, prem si!",
        "si": 1,
        "no": -1
    }
];

let nom = prompt('Com Et dius?');
let pagina = 0;
let nomPublic = document.querySelector('#nom');
nomPublic.textContent = `Benvingut: ${nom}`;
let conjuntPaginas = [];

let text = document.querySelector('.text');
text.textContent = historia[pagina].text;
let sumPag = document.querySelector('.pagina');
sumPag.textContent = `Pagina: ${pagina}`;

conjuntPaginas.push(pagina);
let pintaPag = document.querySelector('#pagines');
pintaPag.textContent = `Has estat a la pagina: ${conjuntPaginas}`;

function ferSi() {
    pagina = historia[pagina].si;
    text.textContent = historia[pagina].text;
    let sumPag = document.querySelector('.pagina');
    sumPag.textContent = `Pagina: ${pagina}`;
    conjuntPaginas.push(pagina);
    pintaPag.textContent = `Has estat a la pagina: ${conjuntPaginas}`;
};
function ferNo() {
    pagina = historia[pagina].no;
    text.textContent = historia[pagina].text;
    let sumPag = document.querySelector('.pagina');
    sumPag.textContent = `Pagina: ${pagina}`;
    conjuntPaginas.push(pagina);
    pintaPag.textContent = `Has estat a la pagina: ${conjuntPaginas}`;
 };