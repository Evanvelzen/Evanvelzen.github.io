console.log('Main JS loaded');

const rpg = document.querySelector(`.rpg`);
const survival = document.querySelector(`.survive`);
const horror = document.querySelector(`.horror`);
const contact = document.querySelector(`.contact`);
const about = document.querySelector(`.about`);
const start = document.querySelector(`.start`);

rpg.addEventListener("click", goToRpg);
survival.addEventListener("click", goToPC);
horror.addEventListener("click", goToHorror);
contact.addEventListener("click", goToContact);
about.addEventListener("click", goToAbout);
start.addEventListener("click", goToStartPage);

function goToRpg (){
    window.location.href = "/devices/mobile.html";
}
function goToPC(){
    window.location.href = "/devices/pc.html";
}
function goToHorror() {
    window.location.href = "/subject-video-games/category-horror.html"
}

function goToContact(){
    window.location.href = "/other pages/contact.html";
}
function goToAbout(){
    window.location.href = "/other pages/about.html";
}
function goToStartPage(){
    window.location.href = "/other pages/welcome.html";
}