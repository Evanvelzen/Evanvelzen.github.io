const backToHomeButton = document.querySelector(".back-to-home");
const check = "@"
const formName = document.querySelector(".name-input");
const formLastName = document.querySelector(".last-name-input");
const formEmail = document.querySelector(".email-input");
const sendButton = document.querySelector(".sendbutton");
const dump = document.querySelector(".dump");

function backToHome() {
    location.href = "/software/webcatalogus/index.html";
}

function sendData() {
    if (formEmail.value == "" && formName.value == "" && formLastName.value == "") {
        alert("uw velden zijn leeg");
    } else if (formName.value > 30) {
        alert("Het lijkt erop dat deze naam te lang is. Probeer het opnieuw.");
    } else if(formEmail.value){
        if(formEmail.value.includes(check)){
            dump.innerHTML = "Bedankt voor het sturen van je gegevens.";
        } else {
            alert("dit is geen email adres");
        }
    } else {
        dump.innerHTML = "Bedankt voor het sturen van je gegevens.";
    }
}

backToHomeButton.addEventListener("click", backToHome);
sendButton.addEventListener("click", sendData);