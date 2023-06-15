console.log('main.js loaded');

const startButton = document.querySelector('.div2');
const history = document.querySelector('.div3');

startButton.addEventListener('click', goToInfo);
history.addEventListener('click', goToHistory);



function goToInfo(){
    window.location.href = ('/software/Battle of Midway (game)/info.html');
}

function goToHistory(){
    window.location.href = ('/software/Battle of Midway (game)/rules.html');
}