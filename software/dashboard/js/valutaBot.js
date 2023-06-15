const sendButton = document.querySelector(".send-button");
const question = document.querySelector(".question");
const outputAnswer = document.querySelector(".drop");
let runChecks = true;
let runCheck2 = false
//here is fetchdata gets saved into an variable
let fetchedData;
fetch(
  `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json`
)
  .then((data) => data.json())
  .then((data) => {
    fetchedData = data;
  });

//here the entered wuestion is checked for an answer
function questionCheck() {
  if (question.value == "Hallo") {
    outputAnswer.innerHTML += `<div class="alert alert-primary" role="alert">
            <strong>User</strong> ${question.value}
        </div>`;
    setTimeout(showHallo, 1000);
    question.value = "";
  } else if (question.value == "Waarom staat er lager is beter?") {
    outputAnswer.innerHTML += `<div class="alert alert-primary" role="alert">
    <strong>User</strong> ${question.value}
    </div>`;
    setTimeout(Question1, 1000);
    question.value = "";
  } else if (
    question.value == "Kan je mij een lijst geven van de lijst de muntcodes."
  ) {
    outputAnswer.innerHTML += `<div class="alert alert-primary" role="alert">
    <strong>User</strong> ${question.value}
    </div>`;
    setTimeout(showListCurrency, 1000);
    question.value = "";
  } else if (
    question.value == "ik zou graag de waarde van een munteenheid willen weten"
  ) {
    outputAnswer.innerHTML += `<div class="alert alert-primary" role="alert">
    <strong>User</strong> ${question.value}
    </div>`;

    setTimeout(askCode, 1000);
    question.value = "";
  } else if (question.value == "!help") {
    outputAnswer.innerHTML += `<div class="alert alert-primary" role="alert">
    <strong>User</strong> ${question.value}
    </div>`;
    setTimeout(help, 1000);
    question.value = "";
  } else {
    outputAnswer.innerHTML += `<div class="alert alert-primary" role="alert">
  <strong>User</strong> ${question.value}
  </div>`;
    setTimeout(error, 1000);
    question.value = "";
  }
}
// here the question gets answered from one of the functions
function showHallo() {
  outputAnswer.innerHTML += `<div class="alert alert-success" role="alert">
        <strong>Valuta Bot</strong> Hallo, ik ben Valuta bot. Je kan van alles over geld vragen aan mij. <br> Type !help voor een paar voorbeeld vragen.
        <br>
        Hou wel rekening dat ik hoofdletter gevoelig ben.<br>
        En ook dat u de internationale muntcodes gebruikt<br>
        Voor een lijst met Commando's kunt u !help typen.
        </div>`;
}

function help() {
  outputAnswer.innerHTML += `<div class="alert alert-success" role="alert">
  <strong>Valuta bot</strong> hier is een lijst met commando's. <br>
  - Hallo. <br>
  - Waarom staat er lager is beter? <br>
  - ik zou graag de waarde van een munteenheid willen weten<br>
  - Kan je mij een lijst geven van de lijst de muntcodes.<br>
  </div>
  `;
  question.value = "";
}

function Question1() {
  outputAnswer.innerHTML += `<div class="alert alert-success" role="alert">
    <strong>Valuta bot</strong> Er staat lager is beter om aan te helpen met aflezen.
  </div>
  `;
}

function error() {
  outputAnswer.innerHTML += `<div class="alert alert-danger" role="alert">
    <strong>Valuta Bot</strong> Ik begreep uw vraag niet, kunt u uw spelling controleren en de internationale munt codes gebruiken. </div>`;
}

function errorCoin() {
  outputAnswer.innerHTML += `<div class="alert alert-danger" role="alert">
    <strong>Valuta bot</strong> Ik kon geen muntcode vinden. probeert u het opnieuw.
  </div>
  `;
}

function showListCurrency() {
  outputAnswer.innerHTML += `<div class="alert alert-success" role="alert">
    <strong>Valuta bot</strong> Omdat de lijst te groot is om te laten zien in 1 bericht geef ik u een link naar de pagina waar het kunt vinden Hier is een link naar een pagina die alle munt codes bevat met de volledige naam van de munt.
    <a href="/valuta list.html" class="alert-link">muntenlijst</a>
  </div>`;
}

function askCode() {
  //  bot asks for valuta coin name
  outputAnswer.innerHTML += `<div class="alert alert-success" role="alert">
  <strong>Valuta bot</strong> voert u alstublieft nu de muntcode in.
  </div>
  `;
  // question.value = "";

  //here the eventlistener for the function question check gets turned off
  //the eventlistener for answering the question of the value of a certain is turned on
  runChecks = false;
  runCheck2 = true;
  sendButton.addEventListener("click", () => {
    if (runCheck2) answerValue();
  });

}

function answerValue() {
  //fetch data enters the function
  fetchedData;
  console.log(question.value);
  //
  const coinValue = fetchedData.eur[`${question.value}`];
  //here coinValue is checked for the correct currency,  
  // for (const coinValue of Object.entries(data.eur))
    if (coinValue != null) {
      
      //bot answers with the value
      outputAnswer.innerHTML += `<div class="alert alert-success" role="alert">
    <strong>Valuta bot</strong> De waarde van uw gekozen munt is ${coinValue}
    </div>`;
    // questionCheck eventlistern turned on and answerValue eventlistener turned off
  runChecks = true;
  runCheck2 =  false;
//Alternative answers for incase the user experiences issues
  } else if (question.value == "Kan je mij een lijst geven van de lijst de muntcodes."){
    setTimeout(showListCurrency, 1000);
  } else if(question.value == "!help"){
    setTimeout(help, 1000)
  } else {errorCoin()}
  
  
  question.value = "";
}

//event listener with on off switch that prevents the question check function from always running and thus causing unintentional things 
sendButton.addEventListener("click", () => {
  if (runChecks) questionCheck();
});

showHallo();
