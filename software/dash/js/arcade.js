console.log(`Javascript Loaded`);
// html classes binnen halen
const cadeyBotAnswer = document.querySelector(`.cadey-bot-answer`);
const inputQuestion = document.querySelector(`.input-question`);
const historyButton = document.querySelector(`.history-button`);
const popularityButton = document.querySelector(`.popularity-button`);
const genreButton = document.querySelector(`.genre-button`);
const enginButton = document.querySelector(`.engin-button`);
const companyButton = document.querySelector(`.company-button`);
const speedrunButton = document.querySelector(`.speedrun-button`);
const infoButton = document.querySelector(`.info-button`);
const opinionButton = document.querySelector(`.opinion-button`);
const homeButton = document.querySelector(`.home-button`);
const textType = document.querySelector(`.type-text`);
const sendButton= document.querySelector(`.search`);

// Eventlisteners toevoegen
historyButton.addEventListener("click", historyAnswer);
popularityButton.addEventListener("click", popularityAnswer);
genreButton.addEventListener("click" ,genreAnswer);
enginButton.addEventListener("click", enginAnswer);
companyButton.addEventListener("click", companyAnswer);
speedrunButton.addEventListener("click", speedrunAnswer);
infoButton.addEventListener("click", infoAnswer);
opinionButton.addEventListener("click", opinionAnswer);
homeButton.addEventListener("click", returnButton);

// Fuctions aanmaken
function historyAnswer() {
    inputQuestion.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">Vertel  me iets over de Geschiedenis van arcade games?</div>`;
    cadeyBotAnswer.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 col-md-6 chatbox-text">Het begon allemaal met de Penny Arcade, een speelhal met apparaten waar je zelf een centje in gooide om te kunnen spelen. Het principe ontstond tussen de 1905 en 1910</div>`;
}
function popularityAnswer() {
    inputQuestion.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">Vertel me iets over de Populariteit?</div>`
    cadeyBotAnswer.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 col-md-6 chatbox-text">De populairste spellen uit die tijd waren: Space Invaders (1978), Pac-Man (1980), Donkey Kong (1981) en Tetris (1983).</div>`;
}
function genreAnswer() {
    inputQuestion.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">Vertel me iets over de Soorten Arcade games?</div>`
    cadeyBotAnswer.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 col-md-6 chatbox-text">Je hebt shooters games, Puzzle games, Horror games, Strategie games en meer....</div>`;
}
function enginAnswer() {
    inputQuestion.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">Welke arcade engins kan ik gebruiken?</div>`
    cadeyBotAnswer.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 col-md-6 chatbox-text">api.arcade.academy.com<br>arcade.makecode.com</div>`;
}
function companyAnswer() {
    inputQuestion.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">Welke arcade bedrijven zijn er?</div>`
    cadeyBotAnswer.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 col-md-6 chatbox-text">Nintendo<br>Sega<br>Bandai Namco<br>Atari<br>Taito Corporation<br>Enz...</div>`;
}
function speedrunAnswer() {
    inputQuestion.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">Wie is de meest bekende speedrunner?</div>`
    cadeyBotAnswer.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 col-md-6 chatbox-text">Billy Michell is de meest bekende arcade speedrunner. Hoewel hij ook gezien is als de meest bekende vals speler.</div>`;
}
function infoAnswer() {
    inputQuestion.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">Wat is een arcade game precies?</div>`
    cadeyBotAnswer.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 col-md-6 chatbox-text">Een arcadespel, ook wel speelkast of speelautomaat genoemd, is een muntslikkende vermaakmachine die men vroeger veelvuldig in restaurants, cafés, snackbars, speelhallen en andere vermaakscentra vond. Ook op kermissen waren kramen te vinden waar arcadespellen konden worden gespeeld.</div>`;
}
function opinionAnswer() {
    inputQuestion.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">Wat is jou favorite arcade game</div>`
    cadeyBotAnswer.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 col-md-6 chatbox-text">Tetris. Het spel heeft een leuk bekend thema en het geeft mij een beter gevoel elke keer wanneer ik de muziek hoor spelen.</div>`;
}
function returnButton() {
    inputQuestion.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">Ik heb geen vragen meer</div>`
    cadeyBotAnswer.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 col-md-6 chatbox-text">Ik hoop dat ik u heb kunnen helpen.<br><a href="/home.html">Terug naar de home</a></div>`;
    
}

function simulateChat() {
    // Loop voor de vragen
    if (textType.value == "Wat is Donkey Kong?"){
        inputQuestion.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">Wat is Donkey Kong?</div>`;
        cadeyBotAnswer.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">In Donkey Kong wordt Pauline gekidnapt door de grote gorilla Donkey Kong. Mario (Jumpman) is de aangewezen persoon om haar te redden en Donkey Kong uit te schakelen.

        Het spel bestaat uit drie levels (de originele arcadeversie bestaat uit 4 levels) die, wanneer de speler ze alle drie heeft gehaald, zich weer herhalen, maar dan op een moeilijker niveau.
        
        Donkey Kong zijn voornaamste wapens zijn tonnen, die hij gooit of rolt naar Mario. Van dit beeld zijn ook vaak nog parodieën terug te vinden, onder andere in The Fairly OddParents of in 100 Things to Do Before High School. Ook andere aspecten van dit spel zijn terug te vinden in latere spellen van Nintendo, waaronder de hamer in Super Smash Bros.</div>`
    } else if (textType.value == "Wat is Pac-Man?"){
        inputQuestion.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">Wat is Pac-Man?</div>`;
        cadeyBotAnswer.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">De speler bestuurt in het spel een geel "happertje" genaamd Pac-Man, waarmee hij zich een weg moet banen door een speelveld gevuld met bolletjes en andere voorwerpen zoals vruchtjes. Het doel is om alle bolletjes in het speelveld op te eten. De vruchtjes leveren extra punten op.</div>`
    
    } else if (textType.value == "Wat is Tetris?"){
        inputQuestion.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">Wat is Tetris?</div>`;
        cadeyBotAnswer.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">Tetris is een puzzel-computerspel ontworpen door Aleksej Pazjitnov. De eerste speelbare versie kwam uit op 6 juni 1984.[1] Het spel kreeg algemene bekendheid doordat het meegeleverd werd bij het spelletjesplatform Game Boy van Nintendo in 1989 (zie foto hiernaast). De kampioenschappen van het spel worden echter vaak gespeeld op Nintendo Entertainment System (NES). De naam is afgeleid van het woord tetromino, omdat ieder blokje uit vier vierkantjes bestaat en zo een tetromino is, en tennis, de favoriete sport van Pazjitnov.</div>`
    
    } else if (textType.value == "Wat is Space Invader?"){
        inputQuestion.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">Wat is Space Invader?</div>`;
        cadeyBotAnswer.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">Space Invaders is geïnspireerd door Taitos eerdere spel Space Monsters[1] en Toshiro's interpretatie van buitenaardse wezens uit The War of the Worlds, en is een samensmelting van de twee. De speler bestuurt een laserkanon dat links en rechts beweegt aan de onderkant van het scherm. Rijen aliens bewegen heen en weer, tevens langzaam van boven naar beneden bewegend. Als een van de wezens de onderkant van het scherm bereikt is het spel afgelopen. Het laserkanon heeft een oneindige hoeveelheid munitie om de wezens te vernietigen. Ondertussen schieten de aliens af en toe terug op de speler met dodelijke stralen en bommen. Het kanon kan drie keer vernietigd worden (de speler heeft drie levens) en het spel eindigt wanneer alle levens op zijn. Soms komt er een ruimteschip voorbij aan de bovenkant, dat kapotgeschoten kan worden voor extra punten. Terwijl de speler meer wezens vernietigt gaan de wezens steeds sneller bewegen. Wanneer het laatste wezen beschoten wordt komt er een nieuw scherm met wezens die een rij lager beginnen met bewegen dan in de vorige ronde.</div>`
    
    } else {
        cadeyBotAnswer.innerHTML = `<br><div class="text-box bg-white border border-dark border-2 chatbox-text">Hier heb ik geen antwoord op.</div>`;
    }
}

// Fuctie aangeroepen
sendButton.addEventListener("click", simulateChat);