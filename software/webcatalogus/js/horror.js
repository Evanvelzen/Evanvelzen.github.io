console.log(`Welcome`);

const fnaf = document.querySelector(`.fnaf`);
const ln = document.querySelector(`.ln`);
const slender = document.querySelector(`.slender`);
const friday = document.querySelector(`.friday`);
const dd = document.querySelector(`.dd`);
const granny = document.querySelector(`.granny`);
const re = document.querySelector(`.re`);
const sjm = document.querySelector(`.sjm`);
const tt = document.querySelector(`.tt`);
const returnButton = document.querySelector(`.return`);
const fs = document.querySelector(`.ferretStudio`);
const rs = document.querySelector(`.rockstar`);
const ac = document.querySelector(`.activision`);
const ub = document.querySelector(`.ubisoft`);

fnaf.addEventListener("click", openFnaf);
fnaf.addEventListener("mouseenter", playFnafSound);

ln.addEventListener("click", openLn);
ln.addEventListener("mouseenter", playLnSound);

slender.addEventListener("click", openSlender);
slender.addEventListener("mouseenter", playSlenderSound);

friday.addEventListener("click", openFriday);
friday.addEventListener("mouseenter", playFridaySound);

dd.addEventListener("click", openDd);
dd.addEventListener("mouseenter", playDdSound);

granny.addEventListener("click", openGranny);
granny.addEventListener("mouseenter", playGrannySound);

re.addEventListener("click", openRe);
re.addEventListener("mouseenter", playReSound);

sjm.addEventListener("click", openSjm);
sjm.addEventListener("mouseenter", playSjmSound);

tt.addEventListener("click", openTt);
tt.addEventListener("mouseenter", playTtSound);

returnButton.addEventListener("click", returnHome);

fs.addEventListener("click", scratchLink);

rs.addEventListener("click", goToRockstar);

ac.addEventListener("click", goToActivision);

ub.addEventListener("click", goToUbisoft);

function openFnaf (){
    window.location.href = "https://www.minispelletjes.com/spel/five-nights-at-freddys";
}
function openLn (){
    window.location.href = "https://store.steampowered.com/app/424840/Little_Nightmares/";
}
function openSlender(){
    window.location.href = "https://store.steampowered.com/app/252330/Slender_The_Arrival/";
}
function openFriday(){
    window.location.href = "https://store.steampowered.com/app/438740/Friday_the_13th_The_Game/";
}
function openDd(){
    window.location.href = "https://store.steampowered.com/app/332950/Dark_Deception/";
}
function openGranny(){
    window.location.href = "https://www.minispelletjes.com/spel/horror-granny";
}
function openRe(){
    window.location.href = "https://store.steampowered.com/app/883710/Resident_Evil_2/";
}
function openSjm(){
    window.location.href = "https://store.steampowered.com/app/356670/Spookys_Jump_Scare_Mansion/";
}
function openTt(){
    window.location.href = "https://store.steampowered.com/app/568090/Tattletail/";
}
function returnHome(){
    window.location.href = "/index.html";
}
function scratchLink(){
    window.location.href = "https://scratch.mit.edu/users/Nathan15022006/";
}
function goToRockstar(){
    window.location.href = "http://127.0.0.1:5501/companies/rockstar.html"
}
function goToActivision(){
    window.location.href = "http://127.0.0.1:5501/companies/activision.html"
}
function goToUbisoft(){
    window.location.href = "http://127.0.0.1:5501/companies/ubisoft.html"
}

function playFnafSound(){ 
    let audio = new Audio("/audio/Fnaf 1 Full Jumpscare Sound.mp3");
    audio.loop = false;
    audio.play(1)
    fnaf.addEventListener("mouseout", stopFnafSound);
    console.log('Freddy audio loaded');
    function stopFnafSound(){ 
    audio.pause();
    audio.currentTime = 0;
}
}
function playTtSound(){ 
    let audio = new Audio("/audio/TattleTail Thats Me [SoundEffect].mp3");
    audio.loop = false;
    audio.play(1);
    tt.addEventListener("mouseout", stopTtSound);
    console.log(`TattleTail audio loaded`);
    function stopTtSound(){ 
    audio.pause();
    audio.currentTime = 0;
    }
}
function playGrannySound(){ 
    let audio = new Audio("/audio/Granny Baseball Bat Jumpscare Sound Effect.mp3");
    audio.loop = false;
    audio.play(1)
    granny.addEventListener("mouseout", stopGrannySound);
    console.log(`Granny audio loaded`);
    function stopGrannySound(){ 
    audio.pause();
    audio.currentTime = 0;
}
}
function playLnSound(){ 
    let audio = new Audio("/audio/Little Nightmares OST _Prison Toys_.mp3");
    audio.loop = false;
    audio.play(1)
    ln.addEventListener("mouseout", stopLnSound);
    console.log('Little Nightmares Theme loaded');
    function stopLnSound(){ 
    audio.pause();
    audio.currentTime = 0;
}
}
function playSlenderSound(){ 
    let audio = new Audio("/audio/slenderman sound effect.mp3");
    audio.loop = false;
    audio.play(1)
    slender.addEventListener("mouseout", stopSlenderSound);
    console.log(`Slenderman audio loaded`);
    function stopSlenderSound(){ 
    audio.pause();
    audio.currentTime = 0;
}
}
function playFridaySound(){ 
    let audio = new Audio("/audio/Friday the 13th_ the game Ki Ki Ki Ma Ma Ma sound effect.mp3");
    audio.loop = false;
    audio.play(1)
    friday.addEventListener("mouseout", stopFridaySound);
    console.log(`Friday The 13th audio loaded`);
    function stopFridaySound(){ 
    audio.pause();
    audio.currentTime = 0;
}
}
function playSjmSound(){ 
    let audio = new Audio("/audio/Spooky's jumpscare mansion Player Damage sound effect.mp3");
    audio.loop = false;
    audio.play(1)
    sjm.addEventListener("mouseout", stopSjmSound);
    console.log(`Spooky's jumpscare mansion audio loaded`);
    function stopSjmSound(){ 
    audio.pause();
    audio.currentTime = 0;
}
}

function playReSound(){ 
    let audio = new Audio("/audio/Resident Evil 2 Sound Effects - Title Voice _Resident Evil 2_.mp3");
    audio.loop = false;
    audio.play(1)
    re.addEventListener("mouseout", stopReSound);
    console.log(`Resident Evil 2 audio loaded`);
    function stopReSound(){ 
    audio.pause();
    audio.currentTime = 0;
}
}
function playDdSound(){ 
    let audio = new Audio("/audio/Dark Deception Sounds 1_ Murder Monkey Screech.mp3");
    audio.loop = false;
    audio.play(1)
    dd.addEventListener("mouseout", stopDdSound);
    console.log(`Dark Deception audio loaded`);

    function stopDdSound(){ 
        audio.pause();
        audio.currentTime = 0;
    }
}




