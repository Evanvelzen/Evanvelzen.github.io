// queryselecors
const chat = document.querySelector(".chat");
const inputQuestion = document.querySelector(".ask");
const sendButton = document.querySelector(".send-button");

// de functie die de chat simuleert
function simulateChat(){
    if(inputQuestion.value == "Wat voor weer is het?"){
        chat.innerHTML += `<div class="alert alert-primary" role="alert">
            <strong>User</strong> ${inputQuestion.value}
        </div>`;
        setTimeout(showWeather, 2000);
        inputQuestion.value = ""
    } else if(inputQuestion.value == "Wat is de temperatuur?"){
        chat.innerHTML += `<div class="alert alert-primary" role="alert">
            <strong>User</strong> ${inputQuestion.value}
        </div>`;
        setTimeout(showTemperature, 2000);
        inputQuestion.value = ""
    } else {
        chat.innerHTML += `<div class="alert alert-primary" role="alert">
            <strong>User</strong> ${inputQuestion.value}
        </div>`;
        setTimeout(showError, 2000);
        inputQuestion.value = ""
    }
}

// hieronder zijn alle functies voor de reacties van de chatbot
function showWeather(){
    chat.innerHTML += `<div class="alert alert-primary" role="alert">
    <strong>R34lw34th3r</strong> Het word vandaag 17 graden celsius(62.6 graden fahrenheit), licht bewolkt, geen regen verwacht en weinig wind.
    </div>`
}
function showTemperature(){
    chat.innerHTML += `<div class="alert alert-primary" role="alert">
    <strong>R34lw34th3r</strong> Het word vandaag 17 graden celsius(62.6 graden fahrenheit). 
    </div>`
}
function showError(){
    chat.innerHTML += `<div class="alert alert-primary" role="alert">
    <strong>R34lw34th3r</strong> Het spijt me. Ik begrijp niet wat u heeft getypt. Zou u kunnen kijken voor eventuele spelfouten(Let op! De vragen zijn hoofdletter gevoelig)
    </div>`
}
// de eventlsitener
sendButton.addEventListener("click", simulateChat);