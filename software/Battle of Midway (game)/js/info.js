console.log('info.js loaded');

const gameButton = document.querySelector('.game-button');
const team1 = document.querySelector('.team-1');
const team2 = document.querySelector('.team-2');
const player1 = document.querySelector('first-player');
const player2 = document.querySelector('second-player'); 

gameButton.addEventListener('click', toGame);

function toGame(){
    window.location.href = ('game.html');
    window.localStorage.setItem('team-1', team1);
    window.localStorage.setItem('team-2', team2);
    window.localStorage.setItem('first-player', player1);
    window.localStorage.setItem('second-player', player2);
}