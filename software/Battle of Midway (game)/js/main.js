console.log('main.js loaded');

const startButton = document.querySelector('.div2');
const history = document.querySelector('.div3');

startButton.addEventListener('click', goToInfo);
history.addEventListener('click', goToHistory);



function goToInfo(){
    window.location.href = ('info.html');
}

function goToHistory(){
    window.location.href = ('history.html');
}