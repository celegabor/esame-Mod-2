/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- da ogni inserzione trovata, elimina i campi "description", "requirements", "benefits" e "company_profile" per semplificare il risultato

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/

// NON MODIFICARE QUESTO ARRAY!
let jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },

  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },

  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },

  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },

  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },

  { title: "Accounting Clerk", location: "US, MD," },

  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },

  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },

  { title: "HP BSM SME", location: "US, FL, Pensacola" },

  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },

  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },

  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },

  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },

  { title: "Installers", location: "US, FL, Orlando" },

  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },

  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },

  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },

  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },

  { title: "Visual Designer", location: "US, NY, New York" },

  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },

  { title: "Marketing Assistant", location: "US, TX, Austin" },

  { title: "Front End Developer", location: "NZ, N, Auckland" },

  { title: "Engagement Manager", location: "AE," },

  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },

  { title: "Customer Service", location: "GB, LND, London" },

  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },

  { title: "Marketing Exec", location: "SG," },

  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },

  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },

  { title: "Customer Service Associate", location: "CA, ON, Toronto" },

  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },

  { title: "Software Applications Specialist", location: "US, KS," },

  { title: "Craftsman Associate", location: "US, WA, Everett" },

  { title: "Completion Engineer", location: "US, CA, San Ramon" },

  { title: "I Want To Work At Karmarama", location: "GB, LND," },

  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]

// -------------------svolgimento---------------------------


// ---------------sezione in più----------------------

// bottone 1 che attiva la pag di ricerca e disattiva la pag di inserimento e il messaggio iniziale
let pag1 = function () {

  let display = document.getElementById("ricerca")             
  let display2 = document.getElementById("inserimento")
  let messaggio = document.getElementById("pIniziale")

  let bottone1 = document.getElementById('bottone1')
  let bottone2 = document.getElementById('bottone2')

    if (display.classList.contains('display-none')) {

        display.classList.remove('display-none')
        display.classList.add('flex')

        display2.classList.remove('flex')
        display2.classList.add('display-none')

        messaggio.classList.remove('flex')
        messaggio.classList.add('display-none')


        bottone2.classList.remove('effettoBottone')
        bottone1.classList.add('effettoBottone')

    }
     
}

// bottone 2 che attiva la pag di inserimento e disattiva la pag di ricerca e il messaggio iniziale

let pag2 = function () {

  let messaggio = document.getElementById("pIniziale")
  let display = document.getElementById("ricerca")             
  let display2 = document.getElementById("inserimento") 
  
  let bottone1 = document.getElementById('bottone1')
  let bottone2 = document.getElementById('bottone2')

  
  if (display2.classList.contains('display-none')) {

    display2.classList.remove('display-none')
    display2.classList.add('flex')
    
    display.classList.remove('flex')
    display.classList.add('display-none')

    messaggio.classList.remove('flex')
    messaggio.classList.add('display-none')

    bottone1.classList.remove('effettoBottone')
    bottone2.classList.add('effettoBottone')


  }
}

// funzione che toglie i vari messaggi della sezione inserimento (toglie sia allert che conferma caricamento)

function removeMx() {
  let allert = document.getElementById('allertInserimento')

  let ok = document.getElementById('mex')

  ok.classList.remove('flex')
  ok.classList.add('display-none')

  allert.classList.remove('flex')
  allert.classList.add('display-none')


}

// funzione madre della sezione inserimento che: se i campi non sono compilati bene fa venire fuori l'allert e nel caso contrario fa la sua funzione e fa apparire il messaggio di caricamento andato a buon fine

// la funzione raccoglie i dati dai 2 input sotto forma di valore, se inseriti correttamente crea un nuovo oggetto e fa il push sull'array principale JOBS

function input() {
  const nomeInput = document.getElementById('nomeInserisci').value;
  const postoInput = document.getElementById('postoInserisci').value;

  let allert = document.getElementById('allertInserimento')

  let ok = document.getElementById('mex')

  if ((nomeInput==="")||(postoInput==="")) {

    ok.classList.remove('flex')
    ok.classList.add('display-none')

    allert.classList.remove('display-none')
    allert.classList.add('flex')

  }else{

      let nuovoObj = {
    title: nomeInput,
    location: postoInput
    };

    allert.classList.remove('flex')
    allert.classList.add('display-none')


    ok.classList.remove('display-none')
    ok.classList.add('flex')


    jobs.push(nuovoObj);
    console.log(jobs.length);

  }
}


// ------------fine sezione in più----------------------

let result = []; //  Inizializzo array vuoto
let count = 0; // Inizializzo count a 0

function save() {

  //a ogni nuovo click resetto la sezione resultSection
  const resultSection = document.getElementById("resultSection");
  resultSection.innerHTML = ""; 

  const nomeHlower = document.getElementById("nome").value.toLowerCase(); //prelevo i caratteri inseriti nel nome del lavoro
  const luogoHlower = document.getElementById("posto").value.toLowerCase();//prelevo i caratteri inseriti nel posto di lavoro

  // se i campi non sono compilati correttamente appendi il nuovo paragrafo di allert, se no procedi a dare i due valori

  if ((nomeHlower === "") || (luogoHlower === "")) {
    let allert = document.createElement('p')
    allert.innerText = '!!! --------- ATTENTO --------- !!! devi compilare correttamente tutti i campi!!!'    
    allert.id = 'allert'
    allert.style.color = 'orange';
    allert.style.fontSize = '1.5em';
    resultSection.appendChild(allert)
    console.log('campi non compilati correttamente');
  } else {
    result = []; // Resetto l'array result
  count = 0; // Resetto count

  processo(nomeHlower, luogoHlower); //assegno i due valori a una funzione che creerò
  }

  
}

function processo(nomeHlower, luogoHlower) {



  //prelevo i valori title e location da jobs usando un ciclo
    for (let index = 0; index < jobs.length; index++) {
      const nomeJ = jobs[index].title.toLowerCase();
      const postoJ = jobs[index].location.toLowerCase();



  //se i valori coincidono gli do il push sull'array result
      if (nomeJ.includes(nomeHlower) && postoJ.includes(luogoHlower)) {
        result.push(jobs[index]);
      }
    }



    // Aggiornao la variabile count con il conteggio aggiornato degli elementi in result
    count = result.length;

    console.log("Count:", count);




    //se count è maggiore di 0 (quindi trova qualcosa) stampa i risultati, se no stampa che non ci sono risultati

  const resultSection = document.getElementById("resultSection");



    if(count > 0){
          //assegno la posizione prendendola tramite ID

      //creo il nuovo div contenente il titolo
      let newDivTitle = document.createElement('h1')
      newDivTitle.innerText = 'COMPLIMENTI!!! Questi sono i risultati:' 
      newDivTitle.id = 'h1positive'   

      let conto = document.createElement('p')
      conto.innerText = '----- Hai trovato ' + count + ' risultati -----'
      conto.style.color = 'violet'
      conto.style.textAlign = 'center'
      conto.id = 'conto'

      resultSection.appendChild(newDivTitle)
      resultSection.appendChild(conto)




      //prendo ogni oggetto di result e lo ciclo per stamparli 

      for (let i = 0; i < result.length; i++) {


        //prendo i valori sottoforma di stringa e li metto in una costante
        const valori = result[i]
        const titolo = 'TITOLO: '
        const location = 'LOCATION: '
        const valoriTesto = titolo + valori.title + '; ' + location + valori.location


        //creo il nuovo div e gli do il testo da inserire
        let newDiv = document.createElement('li')
        newDiv.innerText = valoriTesto
        newDiv.id = 'result'
        
        


        console.log(newDiv);
        //appendo il nuovo div mettendolo in una sezione dedicata apposta richiamata tramite ID
        
        resultSection.appendChild(newDiv)
      }
    } else {
      let newDivTitle2 = document.createElement('h1')
      newDivTitle2.innerText = 'Mi dispiace...non ci sono risultati. Prova a cambiare il posto o il lavoro.'    
      newDivTitle2.id = 'h1negative'
      resultSection.appendChild(newDivTitle2)

    }

  }